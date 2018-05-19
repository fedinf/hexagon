const gulp = require('gulp');
const Hexagon = require('./hexagon');

gulp.task('build', function() {
    return new Hexagon.Hexagon('config-dev.yml').build();
});

gulp.task('check', function() {
    return new Hexagon.Hexagon('config-dev.yml').check();
});
