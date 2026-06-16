-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  whatsapp_sent BOOLEAN DEFAULT FALSE
);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  email TEXT,
  address TEXT,
  total_orders INTEGER DEFAULT 0,
  notes TEXT
);

-- Create portfolio table
CREATE TABLE IF NOT EXISTS portfolio (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  description TEXT,
  featured BOOLEAN DEFAULT FALSE,
  order_num INTEGER DEFAULT 0
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  image_url TEXT,
  approved BOOLEAN DEFAULT FALSE,
  date TEXT
);

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  details TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'converted', 'lost')),
  whatsapp_sent BOOLEAN DEFAULT FALSE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_customers_phone ON customers(phone);
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio(featured);
CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(approved);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);

-- Enable Row Level Security (RLS)
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust based on your security needs)
CREATE POLICY "Public can view appointments" ON appointments
  FOR SELECT USING (true);

CREATE POLICY "Public can insert appointments" ON appointments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can view customers" ON customers
  FOR SELECT USING (true);

CREATE POLICY "Public can insert customers" ON customers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can view portfolio" ON portfolio
  FOR SELECT USING (true);

CREATE POLICY "Public can view approved reviews" ON reviews
  FOR SELECT USING (approved = true);

CREATE POLICY "Public can insert reviews" ON reviews
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can insert quote_requests" ON quote_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can view quote_requests" ON quote_requests
  FOR SELECT USING (true);

-- Insert sample portfolio data (optional)
INSERT INTO portfolio (title, category, image_url, description, featured, order_num) VALUES
('Designer Blouse', 'blouse', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', 'Elegant designer blouse with intricate work', true, 1),
('Bridal Lehenga', 'bridal', 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80', 'Stunning bridal lehenga with heavy embroidery', true, 2),
('Hand Embroidery', 'embroidery', 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80', 'Beautiful hand embroidery on silk fabric', true, 3),
('Aari Work Blouse', 'aari', 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80', 'Traditional Aari work on designer blouse', false, 4),
('Princess Cut Blouse', 'blouse', 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80', 'Modern princess cut blouse with perfect fit', false, 5);

-- Insert sample reviews (optional)
INSERT INTO reviews (name, rating, text, image_url, approved, date) VALUES
('Priya Sharma', 5, 'Absolutely stunning bridal blouse! The Aari work was exquisite and the fit was perfect. Nagesh and his team are true artists.', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', true, '2 weeks ago'),
('Anjali Reddy', 5, 'I have been coming here for all my tailoring needs for 5 years. The quality is unmatched and they always deliver on time.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', true, '1 month ago'),
('Sneha Patel', 5, 'The Maggam work on my lehenga was breathtaking. Everyone at the wedding could not stop complimenting me.', 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80', true, '3 weeks ago');
