export type data = {
        name : string ,
        details? : string,
        stacks : string[],
        image : string ,
        code : string , 
        view? : string,
        mb? : boolean
    }


export const DataProject : data[]= [

    {
        name : 'Movie-app',
        details : "A movie search app that uses TMDB'API and has API for signin-signup",
        stacks : [
            'Tailwind CSS' , 'React.js' , 'Express.js' , 'PostgreSQL'
        ],
        image : '/Movie.PNG',
        code : 'https://github.com/bundithir/Movie-app-Frontend',
        view : 'https://bundithir.github.io/Movie-app-Frontend/',
        mb : true
    },
    {
        name : 'E-commerce (old version)',
        details : "Build an e-commerce application using React.js, connect firebase database, user can signup and signin with google account and have Stripe's payment system.",
        stacks : [
            'Tailwind CSS' , 'React.js' , 'Firebase' , 'Stripe' , 'Redux-toolkit'
        ],
        image : '/ShopJS.PNG',
        code : 'https://github.com/bundithir/E-Commerce',
        view : 'https://peeshop.netlify.app/',
        mb : true
    },
    {
        name : 'E-commerce (TypeScript)',
        details : "Build an e-commerce application using React.ts and API to pull data for products , API for signin-signup , using AntD table to CRUD products for Admin and have Stripe's payment system.",
        stacks : [
            'Tailwind CSS' , 'React.ts' , 'Express.js' , 'PostgreSQL' ,'Stripe' ,'Ant Design', 'Redux-toolkit'
        ],
        image : '/ShopTS.PNG',
        code : 'https://github.com/bundithir/PeeShop-ts',
        view : 'https://peeshop-ts.netlify.app/',
        mb : true
    },
    {
        name : 'FormAntD',
        details : "Build a single page application by Ant Design that can store personal data and CRUD data on Local Storage , use Redux-toolkit manage form data instead of useState .",
        stacks : [
            'Sass' , 'React.ts' , 'Ant Design', 'Redux-toolkit'
        ],
        image : '/FormAntd.PNG',
        code : 'https://github.com/bundithir/FormAntD',
        view : 'https://antformbd.netlify.app/',
        mb : false
    },
    {
        name : 'c#-CRUD',
        details : "Build a single page application by Bootstrap that can CRUD categories and products data.",
        stacks : [
            'css' , 'Bootstrap' , 'c#', 'ASP.NET Core MVC'
        ],
        image : '/Csharp.PNG',
        code : 'https://github.com/bundithir/CRUD-Csharp',
        mb : false
    }
]

export const DataChallenges : data[] = [
    {
        name : 'Single price grid component',
        details : '',
        stacks : [
            'HTML' , 'CSS'
        ],
        image : '/1.PNG',
        code : 'https://github.com/bundithir/Single-price-grid-component',
        view : 'https://bundithir.github.io/Single-price-grid-component/',
        mb : true
    },
    {
        name : 'Base Apparel coming soon page',
        details : '',
        stacks : [
            'HTML' , 'CSS' ,'JavaScript'
        ],
        image : '/2.PNG',
        code : 'https://github.com/bundithir/Base-Apparel-coming-soon-page',
        view : 'https://bundithir.github.io/Base-Apparel-coming-soon-page/',
        mb : true
    },
    {
        name : 'Four card feature section',
        details : '',
        stacks : [
            'HTML' , 'CSS'
        ],
        image : '/3.PNG',
        code : 'https://github.com/bundithir/Four-card-feature-section',
        view : 'https://bundithir.github.io/Four-card-feature-section/',
        mb : true
    },
    {
        name : 'Pricing component with toggle',
        details : '',
        stacks : [
            'HTML' , 'CSS' ,'JavaScript'
        ],
        image : '/4.PNG',
        code : 'https://github.com/bundithir/Pricing-component-with-toggle',
        view : 'https://bundithir.github.io/Pricing-component-with-toggle/',
        mb : true
    },
    {
        name : 'Intro component with sign up form',
        details : '',
        stacks : [
            'HTML' , 'CSS' ,'JavaScript'
        ],
        image : '/5.PNG',
        code : 'https://github.com/bundithir/Intro-component-with-sign-up-form',
        view : 'https://bundithir.github.io/Intro-component-with-sign-up-form/',
        mb : true
    },
    {
        name : 'Fylo dark theme landing page',
        details : '',
        stacks : [
            'Tailwind CSS' , 'React.js'
        ],
        image : '/6.PNG',
        code : 'https://github.com/bundithir/Fylo-dark-theme-landing-page',
        view : 'https://bundithir.github.io/Fylo-dark-theme-landing-page/',
        mb : true
    },
    {
        name : 'Job listings with filtering',
        details : '',
        stacks : [
            'Tailwind CSS' , 'React.js'
        ],
        image : '/7.PNG',
        code : 'https://github.com/bundithir/Job-listings-with-filtering',
        view : 'https://bundithir.github.io/Job-listings-with-filtering/',
        mb : true
    },
    {
        name : 'REST Countries API with color theme',
        details : '',
        stacks : [
            'Tailwind CSS' , 'React.js'
        ],
        image : '/8.PNG',
        code : 'https://github.com/bundithir/REST-Countries-API-with-color-theme-switcher',
        view : 'https://bundithir.github.io/REST-Countries-API-with-color-theme-switcher/',
        mb : true
    },
    {
        name : 'E-commerce product page',
        details : '',
        stacks : [
            'Tailwind CSS' , 'React.js'
        ],
        image : '/9.PNG',
        code : 'https://github.com/bundithir/E-commerce-product-page',
        view : 'https://bundithir.github.io/E-commerce-product-page/',
        mb : true
    },
]