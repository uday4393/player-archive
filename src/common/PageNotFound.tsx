import React from 'react';
import { ERRORS } from '../constants';

export const PageNotFound: React.FC = () => {
    return <div className="text-center text-gray-800 p-10 text-3xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {ERRORS.common.PAGE_NOT_FOUND}
    </div>
}