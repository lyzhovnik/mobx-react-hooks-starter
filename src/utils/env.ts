window.__DEV__ = process.env.NODE_ENV !== 'production';

window.__API_URL__ = process.env.REACT_APP_API_URL_ || 'http://localhost:8081';

export default {};
