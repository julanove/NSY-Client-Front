import React, {Fragment} from 'react';

class AdminHome extends React.Component {

    async componentDidMount() {
    }

    render() {
        return(
                <Fragment>
                    
                </Fragment>
        )
    }

}
export default AdminHome;

{/* <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login Form Tutorial</title>
    <style>
        
    </style>
</head>

</html>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


<script>

	$(document).on('keypress', function (e) {
		if (e.which == 13) {
            login();
		}
	});

    $('#submit').on('click', function () {
        login();
    })

    function login() {
		$.ajax({
			url: "/auth",
			type: "POST",
			data: JSON.stringify({
				username: $('#username').val(),
				password: $('#password').val()
			}),
			dataType: "json",
			contentType: "application/json",
			success: function (res) {

				window.location = res.redirect;

			},
			error: function (err) {
				alert('Wrong password');
			}
		});
    }

</script> */}