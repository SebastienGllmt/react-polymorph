// @flow
import React from 'react';
import type { Element, ElementRef } from 'react';

// external libraries
import classnames from 'classnames';


// components
import { Options } from '../../components/Options';
import { Input } from '../../components/Input';

// skins
import { OptionsSkin } from './OptionsSkin';
import { InputSkin } from './InputSkin';

type Props = {
  className: string,
  error: string | Element<any>,
  getSelectedOption: Function,
  handleChange: Function,
  handleInputClick: Function,
  inputRef: ElementRef<'input'>,
  isOpen: boolean,
  isOpeningUpward: boolean,
  label: string | Element<any>,
  onBlur: Function,
  onChange: Function,
  onFocus: Function,
  options: Array<{
    isDisabled: boolean,
    value: any
  }>,
  optionRenderer: Function,
  optionsRef: ElementRef<any>,
  placeholder: string,
  rootRef: ElementRef<*>,
  theme: Object, // will take precedence over theme in context if passed
  themeId: string,
  toggleOpen: Function,
  value: string
};

export const SelectSkin = (props: Props) => {
  const selectedOption = props.getSelectedOption();
  const inputValue = selectedOption ? selectedOption.label : '';
  const { theme, themeId } = props;
  return (
    <div
      ref={props.rootRef}
      className={classnames([
        props.className,
        theme[themeId].select,
        props.isOpen ? theme[themeId].isOpen : null,
        props.isOpeningUpward ? theme[themeId].openUpward : null
      ])}
    >
      <div className={theme[themeId].selectInput}>
        <Input
          skin={InputSkin}
          theme={theme}
          inputRef={props.inputRef}
          label={props.label}
          value={inputValue}
          onClick={props.handleInputClick}
          placeholder={props.placeholder}
          error={props.error}
          readOnly
        />
      </div>
      <Options
        skin={OptionsSkin}
        theme={theme}
        isOpen={props.isOpen}
        optionsRef={props.optionsRef}
        options={props.options}
        isOpeningUpward={props.isOpeningUpward}
        onChange={props.handleChange}
        optionRenderer={props.optionRenderer}
        selectedOption={selectedOption}
        noResults={!props.options.length}
        targetRef={props.inputRef}
        toggleOpen={props.toggleOpen}
      />
    </div>
  );
};
