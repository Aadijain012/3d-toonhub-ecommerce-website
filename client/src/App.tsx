import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch } from 'wouter';
import ErrorBoundary from './components/ErrorBoundary';
import { CartProvider } from './components/SiteChrome';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Studio from './pages/Studio';
import Journal from './pages/Journal';
import Lookbook from './pages/Lookbook';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/shop" component={Shop} />
    <Route path="/shop/:slug" component={Product} />
    <Route path="/studio" component={Studio} />
    <Route path="/journal" component={Journal} />
    <Route path="/lookbook" component={Lookbook} />
    <Route path="/cart" component={Cart} />
    <Route path="/contact" component={Contact} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><CartProvider><TooltipProvider><Toaster /><Router /></TooltipProvider></CartProvider></ErrorBoundary>;
}
