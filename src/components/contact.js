import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" class="brand-logo right"></a>
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="contact.html">Contact</a></li>

                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <form className="col s12">
                            <div class="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Textarea</label>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="email" type="email" class="validate" />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                        </form>
                    </div>


                    <button id="submit-btn" class="btn waves-effect waves-light" type="button" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Contact;