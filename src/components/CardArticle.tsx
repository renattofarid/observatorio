'use client';

import React, { useRef } from 'react'
import Link from 'next/link';
import { Post } from '@/services/posts';
import { categoryMapper } from '@/services/home';

interface CardArticleProps extends Post {
    type?: 'middle' | 'default' | 'editorial';
    spaces?: number;
    className?: string;
    // description?: string;
}
export default function CardArticle({
    type = 'default',
    spaces = 1,
    title,
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia illum accusantium corporis non nulla',
    imageUrl,
    slug = '',
    user,
    reference,
    className,
    category
}: CardArticleProps) {
    return (
        <div className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-md shadow-lg p-4 h-full ${type === 'middle' ? 'mb-16 md:mb-0' : ''} ${spaces === 1 ? '' : 'flex flex-col md:flex-row gap-4'} ${className}`}
        >
            {imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageUrl} alt="" className={`w-full ${type === 'middle' ? 'h-2/4 object-cover' : ''}`} />
            )}
            <div>
                <Link href={slug}>
                    <h1 className={`${type !== 'default' ? 'text-3xl lg:text-5xl font-base' : 'text-xl lg:text-2xl font-thin break-words'} my-3 `}>{title}</h1>
                </Link>
                <p className={`${type === 'middle' ? 'text-base' : 'text-xs'}text-base text-[--uss_gray_50] my-5`}>{description}</p>
                <div className='flex flex-row gap-2 items-center'>
                    {user && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={user.image || ''} alt="" className='w-12 h-12 rounded-full' />
                    )}
                    <div className='flex flex-col gap-0'>
                        <h3 className='text-sm p-0 m-0'
                        // agregar atributo de accesibilidad para que readSpeaker pueda leer el texto que yo le diga
                        aria-label='le pertenece a la categoría'
                        >{categoryMapper[category]}</h3>
                        <h3 className='text-sm p-0 m-0'>{user?.name ?? reference?.author}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
