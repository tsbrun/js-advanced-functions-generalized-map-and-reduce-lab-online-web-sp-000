function map(src, func) {
    let mapped = []
    for (let i = 0; i < src.length; i++) {
        mapped.push(func(src[i]))
    }
    return mapped
}

