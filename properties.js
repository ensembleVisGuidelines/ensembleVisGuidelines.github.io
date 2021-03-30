/**
 * Name as used as title for the main page
 * @type {string}
 */
var title = 'Who, Why, What, Where, When? Summarizing Evaluation Results of Ensemble Visualizations';

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/';

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds.
 * field: BibTeX field used for generating the tag clouds,
 * title: Title displayed as headline
 * minTagFrequency: minimum frequency of a tag to be displayed
 * @type {{field: string, title: string, minTagFrequency: number}[]}
 */
var tagCloudOptions = [{
    field: 'data_type',
    title: 'Data Types',
    minTagFrequency: 1
}, {
    field: 'attribute_type',
    title: 'Attribute Types',
    minTagFrequency: 1,
    hiddenTagFrequency: 6
},{
    field: 'keywords',
    title: 'Tasks',
    minTagFrequency: 1,
    maxTagFrequency: 24
}, {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
},{
    field: 'guideline_acc',
    title: 'Guidelines - Accuracy',
    minTagFrequency: 1,
    maxTagFrequency: 1
},{
    field: 'guideline_time',
    title: 'Guidelines - Response Time',
    minTagFrequency: 1,
    maxTagFrequency: 1
},{
    field: 'guideline_user',
    title: 'Guidelines - User Preference',
    minTagFrequency: 1,
    maxTagFrequency: 1
}];

/**
 * If BibTeX entries (and tags) should be editable
 * @type {boolean}
 */
var editable = true;

/**
 * Subtitle describing the paper the data is referring to (set to null to deactivate)
 * @type {{html: string, id: string}}
 */
var paper = {
    html: ' '
    // html: 'Sample literature collection for <b><a href="http://www.visus.uni-stuttgart.de/uploads/tx_vispublications/eurovis14-star.pdf" target="_blank">SurVis</a></b>',
    // id: 'Beck2016Visual'
};

/**
 * Extra pages like an about page that will be listed in the footer an can be opened on demand (page name -> path)
 */
var extraPages = {
    'about': 'about.html'
};

/**
 * Custom style as path to an extra css file (leave empty if not applicable)
 * @type {string}
 */
var customStyle = '';
/* Example for simplified entries */
//var customStyle = 'styles/custom_entries_simplified.css';

/**
 * Options for showing citation information (set to null to avoid showing any citation information)
 * minCitationCount: minimum number of citations of a paper to be displayed in the visualization
 * @type {{minCitationCount: number}}
 */
/* var citations = {
    minCitationCount: 5
}; */
var citations = null;
