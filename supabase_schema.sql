-- ========================================================
-- Fast7 / Matjari (متجري) - Supabase Complete Database Schema
-- ========================================================

-- 1. Enable UUID Extension (optional)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Agency Auth Table
CREATE TABLE IF NOT EXISTS public.agency_auth (
    id TEXT PRIMARY KEY DEFAULT 'agency',
    password_hash TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Stores Table
CREATE TABLE IF NOT EXISTS public.stores (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    subdomain TEXT NOT NULL UNIQUE,
    folder TEXT NOT NULL UNIQUE,
    template TEXT DEFAULT 'default',
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Store Products Table
CREATE TABLE IF NOT EXISTS public.store_products (
    id TEXT PRIMARY KEY,
    store_id TEXT NOT NULL REFERENCES public.stores(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    price NUMERIC DEFAULT 0,
    compare_at_price NUMERIC,
    cost_price NUMERIC,
    sku TEXT,
    category TEXT,
    image TEXT,
    images JSONB DEFAULT '[]'::jsonb,
    description TEXT,
    stock INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Store Customers Table
CREATE TABLE IF NOT EXISTS public.store_customers (
    id TEXT PRIMARY KEY,
    store_id TEXT NOT NULL REFERENCES public.stores(id) ON DELETE CASCADE,
    name TEXT,
    phone TEXT,
    email TEXT,
    city TEXT,
    address TEXT,
    total_orders INTEGER DEFAULT 0,
    total_spent NUMERIC DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Store Orders Table
CREATE TABLE IF NOT EXISTS public.store_orders (
    id TEXT PRIMARY KEY,
    store_id TEXT NOT NULL REFERENCES public.stores(id) ON DELETE CASCADE,
    customer_name TEXT,
    customer_phone TEXT,
    city TEXT,
    address TEXT,
    notes TEXT,
    items JSONB DEFAULT '[]'::jsonb,
    subtotal NUMERIC DEFAULT 0,
    discount NUMERIC DEFAULT 0,
    delivery_fee NUMERIC DEFAULT 0,
    total NUMERIC DEFAULT 0,
    payment_method TEXT DEFAULT 'cod',
    payment_status TEXT DEFAULT 'pending',
    status TEXT DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Store Settings Table
CREATE TABLE IF NOT EXISTS public.store_settings (
    store_id TEXT PRIMARY KEY REFERENCES public.stores(id) ON DELETE CASCADE,
    name TEXT,
    logo TEXT,
    banner TEXT,
    currency TEXT DEFAULT 'YER',
    theme JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Store Auth Table
CREATE TABLE IF NOT EXISTS public.store_auth (
    store_id TEXT PRIMARY KEY REFERENCES public.stores(id) ON DELETE CASCADE,
    password_hash TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Disable Row Level Security (RLS) to grant permissions to API
ALTER TABLE public.agency_auth DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.stores DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_products DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_customers DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_settings DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_auth DISABLE ROW LEVEL SECURITY;

GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;

-- --------------------------------------------------------
-- Storage Bucket Setup for Product Images & Logos
-- --------------------------------------------------------
INSERT INTO storage.buckets (id, name, public)
VALUES ('store-media', 'store-media', true)
ON CONFLICT (id) DO NOTHING;

-- Public Storage Access Policies (Safely drop if exists first)
DROP POLICY IF EXISTS "Public Read Access on store-media" ON storage.objects;
CREATE POLICY "Public Read Access on store-media"
ON storage.objects FOR SELECT
USING (bucket_id = 'store-media');

DROP POLICY IF EXISTS "Public Insert Access on store-media" ON storage.objects;
CREATE POLICY "Public Insert Access on store-media"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'store-media');

DROP POLICY IF EXISTS "Public Update Access on store-media" ON storage.objects;
CREATE POLICY "Public Update Access on store-media"
ON storage.objects FOR UPDATE
USING (bucket_id = 'store-media');

DROP POLICY IF EXISTS "Public Delete Access on store-media" ON storage.objects;
CREATE POLICY "Public Delete Access on store-media"
ON storage.objects FOR DELETE
USING (bucket_id = 'store-media');
