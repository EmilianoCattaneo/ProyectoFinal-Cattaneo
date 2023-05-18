const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.apple.com/v/iphone-12/k/images/meta/iphone-12_specs__uks7xn3l3yqa_og.png?202304130708',
        stock: '10',
        description: 'Descripcion'
    },
    { id: '2', name: 'Samsung S21', price: 800, category: 'celular', img: 'https://images.samsung.com/is/image/samsung/assets/ar/smartphones/galaxy-s21-5g/buy/galaxy-s21plus-mob.png', stock: '10', description: 'descipcion' },
    { id: '3', name: 'Ipad 8va generacion', price: 1200, category: 'tablet', img: 'https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-8th-gen_w-keyboard_09152020.jpg.og.jpg?202305110209', stock: '10', description: 'descipcion' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1);
    })
}

export const getProductsByCategory = (productsCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productsCategory))
        }, 1);
    })
}