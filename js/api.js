const API_BASE = "https://dummyjson.com";
export const fetchData = async (endpoint) => {
  const res = await fetch(\`\${API_BASE}\${endpoint}\`);
  return await res.json();
};