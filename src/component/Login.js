import React,{Component} from 'react'
import Input from './Input'
class Login extends Component{
  state={
    data:{username:'', password:''},
    errors:{}

            
        
  }
  
  handleSubmit=(e)=>{
     e.preventDefault();
     const errors = this.validate();
     console.log(errors)
     this.setState({errors: errors|| {}})

     if(errors) return;

     //call server
     console.log('Submitted')
  }
  validate=()=>{
    const errors={}
    if(this.state.data.username===''){
      errors.username='UserName is required'
    }
    if(this.state.data.password===''){
      errors.password='Password is required'
    }
    return Object.keys(errors).length===0?null:errors
  }
  handleChange=e=>{
    const errors={...this.state.errors}
    const errorMessage=this.validateProperty(e.target)
    if(errorMessage){
      errors[e.target.name]=errorMessage
    }
    else{
      delete errors[e.target.name]
    }
    const data={...this.state.data}
    data[e.target.name]=e.target.value;
    this.setState({data})
  }
  render(){
    return (
    <div>
       <h1>Login</h1>
       <form onSubmit={this.handleSubmit}>
         <Input name='username'
                value={this.state.data.username}
                onChange={this.handleChange}
                error={this.state.errors.username}
                label='UserName'
                type='text'
          />
           <Input name='password'
                value={this.state.data.password}
                onChange={this.handleChange}
                error={this.state.errors.password}
                label='Password'
                type='password'
          />
         <button 
           className='btn btn-primary'
           disabled={this.validate()}
           >Login</button>
       </form>

    </div>
   
  )
  }
  
}
export default Login