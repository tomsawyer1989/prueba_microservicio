const cal_func = (request,response) => {

    let first_number = parseInt(request.query.a);
    let second_number = parseInt(request.query.b);
    let sum = first_number + second_number;

    response.send('The result of the sum was: '+sum);

};

module.exports = {cal_func};

