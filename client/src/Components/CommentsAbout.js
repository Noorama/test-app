import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class CommentsAbout extends Component {

    constructor(props) {
        super(props);
    }





    render() {
        return (
            <Container className="section-colored paddingnone">
                <div className="commentsabout" key={this.props.index} index={this.props.index}>
                    <center>
                        <div className="maintext">
                            <p>{this.props.text}</p>
                        </div>

                        <div className="moreinfo">
                            <p>Chars in Body: {this.props.text.length}</p>
                            <p>Number of vowels: {vowel_count(this.props.text)}, Number of counters: {counter_count(this.props.text)}</p>
                            <p>Revers text is: <b> {reverseString(this.props.text)}</b></p>
                        </div>

                        <button onClick={this.props.removeBlock}>Remove</button> |
                        <a href={'#ex' + this.props.index} rel="modal:open"> Update</a>
                    </center>
                    <hr />

                    <div id={'ex' + this.props.index} className="modal" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <form onSubmit={this.props.update}>
                                        <p>Text</p>
                                        <input type="text" ref={'body' + this.props.index} />
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        )
    }
}

function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vowel_counter = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vowel_counter += 1;
        }

    }
    return vowel_counter;
}

function counter_count(str1) {
    var counter_list = 'qwrtyopsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM';
    var consonants_counter = 0;

    for (var x = 0; x < str1.length; x++) {
        if (counter_list.indexOf(str1[x]) !== -1) {
            consonants_counter += 1;
        }

    }
    return consonants_counter;
}

function reverseString(str) {
    var splitString = str.split(" ");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join(" ");

    return joinArray;
}

export default CommentsAbout;