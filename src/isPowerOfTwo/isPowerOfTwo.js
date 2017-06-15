export default (num) => !(num & (num - 1)) ? "YES" : "NO";
