import * as React from 'react';

interface IPhoneFormState {
  name: string;
  age: string;
}

interface IProps {
  onCreate(data: any): void;
}

class PhoneForm extends React.Component<IProps, IPhoneFormState> {

  constructor(props: IProps) {
    super(props);
    
    this.state = {
      name: '',
      age: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { target } = e;
    this.setState(() => ({
      [target.name]: target.value
    } as Pick<IPhoneFormState, keyof IPhoneFormState>))
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.state.name !== '' && Number.isNaN(parseInt(this.state.age)) === false) {
      this.props.onCreate(this.state);
      this.setState({
        name: '',
        age: ''
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder='Age'
          value={this.state.age}
          onChange={this.handleChange}
          name="age"
        />
        <div>{this.state.name} {this.state.age !== '' && <React.Fragment>({this.state.age})</React.Fragment>}</div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default PhoneForm;