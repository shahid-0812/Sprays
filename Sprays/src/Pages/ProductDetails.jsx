import React from 'react'
import { Product } from '../ProductComponents/Product'
import { Review } from '../ProductComponents/Review'
import { Testimonials } from '../HomeComponents/Testimonials'
import { Mastery } from '../ProductComponents/Mastery'

export const ProductDetails = () => {
    return (
        <>
            <Product />
            <Review />
            <Testimonials />
            <Mastery />
        </>
    )
}
