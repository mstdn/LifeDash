<!DOCTYPE html>
<html data-theme="light" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="mobile-web-app-capable" content="yes">

        <title inertia>{{ config('app.name', 'LifeDash') }}</title>

        <meta property="og:site_name" content="{{ config('app.name', 'LifeDash') }}">
        <meta property="og:title" content="{{ config('app.name', 'LifeDash') }}">
        <meta property="og:type" content="article">
        <meta property="og:url" content="{{request()->url()}}">

        @laravelPWA
        @routes
        @vite('resources/js/app.js')
        @inertiaHead
    </head>
    <body class="bg-white dark:bg-gray-900">
        @inertia
    </body>
</html>
