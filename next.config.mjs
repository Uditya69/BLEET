/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io'

            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
          test: /node_modules\/undici\/.*\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        });
        return config;
      },
};

export default nextConfig;
