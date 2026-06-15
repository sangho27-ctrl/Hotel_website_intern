<?php

return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://localhost:5173',
        'https://hotel-website-intern-eight.vercel.app',
        'https://hotel-website-intern-ltk3srjjv-anh-project.vercel.app',
    ],
    'allowed_origins_patterns' => ['https://hotel-website-intern-.*\.vercel\.app'],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
