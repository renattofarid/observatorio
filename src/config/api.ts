import dotenv from 'dotenv';
dotenv.config();

export const API_URL = process.env.API_URL || 'https://observatorio-uss.azurewebsites.net/api';