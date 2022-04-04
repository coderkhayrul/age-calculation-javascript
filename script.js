function age_result(){
    var date_1 = document.getElementById('get_date').value;
    var month_1 = document.getElementById('get_month').value;
    var year_1 = document.getElementById('get_year').value;

    var date = new Date();
    var date_2 = date.getDate();
    var month_2 = 1 + date.getMonth();
    var year_2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (date_1 > date_2) {
        date_2 = date_2 + month[month_2 - 1];
        month_2 = month_2 - 1;
    }
    if (month_1 > month_2) {
        month_2 = month_2 + 12;
        year_2 = year_2 - 1;
    }

    var final_date = date_2 - date_1;
    var final_month = month_2 - month_1;
    var final_year = year_2 - year_1;
    
    if (year_1 > year_2) {
        alert('Input Your Validity Year');
    }
    else if (final_date && final_month && final_year) {
        document.getElementById('age_result').innerHTML = 'Your Age is '+final_year+' Years '+final_month+' Months '+final_date+' Days';
    }else{
        alert('Please select Your Age');
    }

}