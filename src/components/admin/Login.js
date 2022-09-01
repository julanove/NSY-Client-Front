import React, {Fragment} from 'react';
import '../../css/admin.css';

class Login extends React.Component {

    async componentDidMount() {

        console.log('test---------------admin');
    }

    render() {
        return(
                <Fragment>
                    <div className="login-form">
                        <h1 class="login-font">VÀO ĐI NGƯỜI ANH EM</h1>
                        <input id="username" type="text" name="username" placeholder="Username" required/>
                        <input id="password" type="password" name="password" placeholder="Password" required/>
                        <input type="button" id="submit" value="ĐĂNG NHẬP" className="submit yunabutton"/> 
                    </div>
                </Fragment>
        )
    }

}
export default Login;

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