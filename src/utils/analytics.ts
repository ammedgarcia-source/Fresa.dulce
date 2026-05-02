import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
    const measurementId = process.env.REACT_APP_GA_ID || "G-XXXXXXXXXX";
    ReactGA.initialize(measurementId);
};

export const trackPageView = (path: string) => {
    ReactGA.send({
        hitType: "pageview",
        page: path,
    });
};

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
    ReactGA.event(eventName, eventData);
};

export const trackAddToCart = (productId: number, productName: string, price: number) => {
    ReactGA.event('add_to_cart', {
        product_id: productId,
        product_name: productName,
        value: price,
        currency: 'MXN',
    });
};

export const trackPurchase = (items: any[], total: number, type: 'dulce' | 'fresas') => {
    ReactGA.event('purchase', {
        transaction_id: Date.now(),
        value: total,
        currency: 'MXN',
        items: items.map(item => ({
            item_id: item.id,
            item_name: item.name,
            price: item.price,
            quantity: item.qty,
        })),
        custom_parameter: type === 'dulce' ? 'Dulce Fresa' : 'Fresas AGS',
    });
};
