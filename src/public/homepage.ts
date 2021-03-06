import dropdown = require('semantic-ui-dropdown');

init();
function init(): void{
    get_latest_news();
    get_popular_news();
}

function get_latest_news(): void{
    $.ajax({
        url: '/latestNews_home',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            fill_lists.fill_latest_news(data);
        },
        error: function(textStatus, err){
            console.log('text status ' + textStatus + ', err ' + err);
        }
    });
}

function get_popular_news(): void{
    $.ajax({
        url: '/popularNews_home',
        type: 'GET',
        contentType: 'application/json',
        success: function(data){
            fill_lists.fill_popular_news(data);
        },
        error: function(textStatus, err){
            console.log('text status ' + textStatus + ', err ' + err);
        }
    });
}