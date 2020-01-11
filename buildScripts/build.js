/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Building for prod...'));

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error));
    }

    if (jsonStats.hasWarning) {
        console.log('webpack warnings: ');
        jsonStats.warnings.map(w => console.log(w));
    }

    console.log(`webpack stats: ${stats}`);

    console.log('build for prod done written to /dist');

    return 0;
});
