export default (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
