export const useWebVitals = () => {
  if (process.client) {
    // Only run in production or when explicitly enabled
    const shouldTrack = process.env.NODE_ENV === 'production' || window.location.search.includes('trackVitals=true')

    if (!shouldTrack) return

    // Web Vitals tracking
    const reportMetric = (metric: any) => {
      // Log to console in development
      if (process.env.NODE_ENV !== 'production') {
        console.log('[Web Vitals]', metric.name, metric.value, metric.rating)
      }

      // In production, you would send this to your analytics service:
      // Example: window.gtag?.('event', metric.name, { value: metric.value, metric_rating: metric.rating })
      // Example: fetch('/api/analytics', { method: 'POST', body: JSON.stringify(metric) })
    }

    // Cumulative Layout Shift (CLS)
    const observeCLS = () => {
      let clsValue = 0
      let clsEntries: any[] = []

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
            clsEntries.push(entry)
          }
        }
      })

      observer.observe({ type: 'layout-shift', buffered: true })

      // Report on page hide
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && clsValue > 0) {
          reportMetric({
            name: 'CLS',
            value: clsValue,
            rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor',
            entries: clsEntries
          })
        }
      })
    }

    // Largest Contentful Paint (LCP)
    const observeLCP = () => {
      let lcpValue = 0

      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        lcpValue = lastEntry.startTime
      })

      observer.observe({ type: 'largest-contentful-paint', buffered: true })

      // Report on page hide
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && lcpValue > 0) {
          reportMetric({
            name: 'LCP',
            value: lcpValue,
            rating: lcpValue < 2500 ? 'good' : lcpValue < 4000 ? 'needs-improvement' : 'poor'
          })
        }
      }, { once: true })
    }

    // First Input Delay (FID)
    const observeFID = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidValue = (entry as any).processingStart - entry.startTime
          reportMetric({
            name: 'FID',
            value: fidValue,
            rating: fidValue < 100 ? 'good' : fidValue < 300 ? 'needs-improvement' : 'poor',
            entry
          })
        }
      })

      observer.observe({ type: 'first-input', buffered: true })
    }

    // Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navEntry = performance.getEntriesByType('navigation')[0] as any
      if (navEntry) {
        const ttfb = navEntry.responseStart - navEntry.requestStart
        reportMetric({
          name: 'TTFB',
          value: ttfb,
          rating: ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs-improvement' : 'poor'
        })
      }
    }

    // Initialize observers
    try {
      observeCLS()
      observeLCP()
      observeFID()
      measureTTFB()
    } catch (error) {
      console.error('[Web Vitals] Error initializing:', error)
    }
  }
}
