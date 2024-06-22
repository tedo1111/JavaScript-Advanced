function riskyOperation() {
    if (Math.random() < 0.5) { 
        throw new Error('Task failed!!!');
    }

    return 'Task successful';
}

try {
    const result = riskyOperation();
    console.log(result);
} catch(err) {
    // Error handling here
    console.error(err.message);
}
console.log('as usual');
