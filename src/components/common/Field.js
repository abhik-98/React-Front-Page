import React, { Component } from 'react';

class field extends Component {
    render() {
        return (
            <div>
            {this.props.elementName==='input'?
                <div className="form-group ">
                    <input className="form-control"
                        id={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder} 
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                        name = {this.props.name}
                        onBlur = {this.props.onBlur}
                        onChange={ this.props.onChange}
                    />
                    <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors)&&
                        <span>{this.props.errors}</span>
                    }
                </p>
                </div>                       
            
            :
            <div className="form-group form-group-textarea mb-md-0">
                <textarea className="form-control"
                    id={this.props.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder} 
                    required="required"
                    data-validation-required-message="Please enter your phone number."
                    name = {this.props.name}
                    onBlur = {this.props.onBlur}
                    onChange={ this.props.onChange}    
                ></textarea>
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors)&&
                        <span>{this.props.errors}</span>
                    }
                </p>
            </div>
            }
                
            </div>
        );
    }
}

export default field;