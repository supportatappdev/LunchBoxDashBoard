resolve: {
loadPlugin: function ($ocLazyLoad) {
return $ocLazyLoad.load([
{
serie: true,
name: 'angular-flot',
files: [ 'js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
},
{
name: 'angles',
files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
},
{
name: 'angular-peity',
files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
}
]);
}
}