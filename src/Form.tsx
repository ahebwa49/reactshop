import * as React from 'react';

interface IFormContext {
  values: IValues;
  setValue?: (fieldName: string, value: any) => void;
}

const FormContext = React.createContext<IFormContext>({
  values: {},
});

export interface IValues {
  [key: string]: any;
}

interface IFormProps {
  defaultValues: IValues;
}

interface IState {
  values: IValues;
}

interface IFieldProps {
  name: string;
  label: string;
  type?: 'Text' | 'Email' | 'Select' | 'TextArea';
  options?: string[];
}

export class Form extends React.Component<IFormProps, IState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      values: props.defaultValues,
    };
  }

  public static Field: React.SFC<IFieldProps> = (props) => {
    const { name, label, type, options } = props;

    const handleChange = (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>,
      context: IFormContext
    ) => {
      if (context.setValue) {
        context.setValue(props.name, e.currentTarget.value);
      }
    };
    return (
      <FormContext.Consumer>
        {(context) => (
          <div className="form-group">
            <label htmlFor={name}>{label}</label>
            {(type === 'Text' || type === 'Email') && (
              <input
                type={type.toLowerCase()}
                id={name}
                value={context.values[name]}
                onChange={(e) => handleChange(e, context)}
              />
            )}
            {type === 'TextArea' && (
              <textarea
                id={name}
                value={context.values[name]}
                onChange={(e) => handleChange(e, context)}
              />
            )}
            {type === 'Select' && (
              <select
                value={context.values[name]}
                onChange={(e) => handleChange(e, context)}
              >
                {options &&
                  options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            )}
          </div>
        )}
      </FormContext.Consumer>
    );
  };

  private setValue = (fieldName: string, value: any) => {
    const newValues = { ...this.state.values, [fieldName]: value };
    this.setState({ values: newValues });
  };

  public render() {
    const context: IFormContext = {
      values: this.state.values,
      setValue: this.setValue,
    };
    return (
      <FormContext.Provider value={context}>
        <form className="form" noValidate={true}>
          {this.props.children}
        </form>
      </FormContext.Provider>
    );
  }
}

Form.Field.defaultProps = {
  type: 'Text',
};
