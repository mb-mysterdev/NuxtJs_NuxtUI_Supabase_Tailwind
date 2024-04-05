import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || 'https://npsepnxqudvjdlusjavr.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wc2VwbnhxdWR2amRsdXNqYXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNTUwODcsImV4cCI6MjAyNzkzMTA4N30.nucOtwc3lqxxRadNOZwAxQ8c4gsQyeQr-OihLtfvsQc'
const supabase = createClient(supabaseUrl, supabaseKey)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  serverMiddleware: [
    (req, res, next) => {
      // Middleware to expose Supabase client to the context
      const { createClient } = require('@supabase/supabase-js')
      const supabaseUrl = process.env.SUPABASE_URL || 'https://npsepnxqudvjdlusjavr.supabase.co'
      const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wc2VwbnhxdWR2amRsdXNqYXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNTUwODcsImV4cCI6MjAyNzkzMTA4N30.nucOtwc3lqxxRadNOZwAxQ8c4gsQyeQr-OihLtfvsQc'
      const supabase = createClient(supabaseUrl, supabaseKey)
      req.supabase = supabase
      next()
    }
  ],
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    '@nuxtjs/supabase'
  ],
  env: {
    supabaseUrl,
    supabaseKey
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
    safelistColors: ['primary', 'red', 'orange', 'green']
  },
  devtools: {
    enabled: true
  }
})
