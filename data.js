import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Thor',
            email: 'thor@thorpedersen.co.nz',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
          },
          {
            name: 'Haylee',
            email: 'haylee@hayleerocks.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
          },
    ],
    products: [
        {
            // _id: '1',
            name: 'D.O.T.S. Projector',
            slug: 'dots-projector',
            category: 'Eletronic',
            image: '/images/dots.jpg',
            price: 64.99,
            countInStock: 10,
            rating: 4.5,
            numReviews: 1283,
            description: 'A laser grid of light that can reveal the silhouette of a ghost.'
        },
        {
            // _id: '2',
            name: 'EMF Reader',
            slug: 'emf-reader',
            category: 'Eletronic',
            image: '/images/emf.jpg',
            price: 44.99,
            countInStock: 5,
            rating: 4.9,
            numReviews: 5163,
            description: 'Some Ghosts will leave EMF traces near them that will show up on an EMF Reader as level 5.'
        },
        {
            // _id: '3',
            name: 'Flashlight',
            slug: 'flashlight',
            category: 'Eletronic',
            image: '/images/flashlight.jpg',
            price: 29.98,
            countInStock: 0,
            rating: 2.1,
            numReviews: 839,
            description: 'The flashlight is a piece of equipment used to illuminate the area, usually in front of the person.'
        },
        {
            // _id: '4',
            name: 'Photo Camera',
            slug: 'photo-camera',
            category: 'Eletronic',
            image: '/images/photo-camera.jpg',
            price: 39.99,
            countInStock: 15,
            rating: 4.7,
            numReviews: 6123,
            description: 'This is used for taking photos of paranormal activity.'
        },
        {
            // _id: '5',
            name: 'Candle',
            slug: 'candle',
            category: 'Non-Eletronic',
            image: '/images/candle.jpg',
            price: 14.98,
            countInStock: 8,
            rating: 3.9,
            numReviews: 968,
            description: "A Candle is a great way of keeping a room lit when the lights go out as it isn't dependent on electricity."
        },
        {
            // _id: '6',
            name: 'Lighter',
            slug: 'lighter',
            category: 'Non-Eletronic',
            image: '/images/lighter.jpg',
            price: 9.99,
            countInStock: 35,
            rating: 4.8,
            numReviews: 2725,
            description: 'A simple Lighter used for lighting Candles and Smudge Sticks.'
        },
        {
            // _id: '7',
            name: 'Crucifix',
            slug: 'crucifix',
            category: 'Non-Eletronic',
            image: '/images/crucifix.jpg',
            price: 29.99,
            countInStock: 6,
            rating: 4.1,
            numReviews: 2168,
            description: "A crucifix is used to stop Ghosts from entering their physical form to attack you. It's advised to place them near the Ghost."
        },
        {
            // _id: '8',
            name: 'Smudge Sticks',
            slug: 'smudge-sticks',
            category: 'Non-Eletronic',
            image: '/images/smudge-sticks.jpg',
            price: 29.99,
            countInStock: 10,
            rating: 4.9,
            numReviews: 9163,
            description: "Burning smudge sticks near a ghost will prevent it from attacking for a period of time."
        },
        {
            // _id: '9',
            name: 'Thermometer',
            slug: 'thermometer',
            category: 'Eletronic',
            image: '/images/thermometer.jpg',
            price: 29.99,
            countInStock: 3,
            rating: 4.1,
            numReviews: 7161,
            description: "A Thermometer will help you discover the location of a Ghost quicker by getting the temperature of the room."
        },

    ]
}

export default data;