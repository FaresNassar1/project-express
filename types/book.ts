import express from 'express';
namespace Books{
    export interface contentbook{
        id: number,
        title: string,
        author: string,
        pubYear: string,
    }
    
}
export default Books;