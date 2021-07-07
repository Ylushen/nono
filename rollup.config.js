// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import path from "path";

export default [
    // {
    //     input: 'src/index.ts',   //打包入口文件
    //     output: {
    //         file: 'dist/main.js',
    //     },
    //     plugins: [
    //         typescript({
    //             target: 'es2018',
    //             include: ['src/*'],
    //             baseUrl: path.resolve(__dirname, 'src/env'),
    //             moduleResolution: 'node',
    //             paths: {
    //                 'types/*': ['../../types/*']
    //             }
    //         }),
    //         resolve()
    //     ],
    //     external: [ 'http' ],
    //     sourceMap: true,        //启用sourcemap
    // },
    // {
    //     input: 'src/server.ts',   //打包入口文件
    //     output: {
    //         file: 'dist/server.js',
    //     },
    //     plugins: [
    //         typescript({
    //             target: 'es2018',
    //             include: ['src/*'],
    //             baseUrl: path.resolve(__dirname, 'src/env'),
    //             moduleResolution: 'node',
    //             paths: {
    //                 'types/*': ['../../types/*']
    //             }
    //         }),
    //         resolve()
    //     ],
    //     external: [ 'http' ],
    //     sourceMap: true,        //启用sourcemap
    // },
    {
        input: 'src/client.ts',   //打包入口文件
        output: {
            file: 'dist/client.js',
        },
        plugins: [
            typescript({
                target: 'es2018',
                include: ['src/*'],
                module: "ES6",
                baseUrl: path.resolve(__dirname, 'src/env'),
                paths: {
                    'types/*': ['../../types/*']
                }
            }),
            resolve(),
            serve({
                historyApiFallback: false,
                port: 3000,
            })
        ],
        external: [ 'http' ],
        sourceMap: true,        //启用sourcemap
    },
];