import React from 'react'
import translations from 'content/translations';

export default (lang = 'en', path) => {
    return translations[path]
}