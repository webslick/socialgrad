import React from 'react';
import AddingComponent from '../../components/settings_components/AddingComponent';
import AnswerComponentArea from '../../components/settings_components/AnswerComponentArea';
import AudioComponent from '../../components/settings_components/AudioComponent';
import InputComponentItem from '../../components/settings_components/InputComponentItem';
import RadialBtnsComponent from '../../components/settings_components/RadialBtnsComponent';
import SelectComponentItem from '../../components/settings_components/SelectComponentItem';
import TitleComponent from '../../components/settings_components/TitleComponent';
import CountInput from '../../components/settings_components/CountInput';
import DelayComponent from '../../components/settings_components/DelayComponent';
import AccountSettingsCopy from '../../components/settings_components/AccountSettingsCopy';
import RandomizeComponentArea from '../../components/settings_components/RandomizeComponentArea';
import ManualSelect from '../../components/settings_components/ManualSelect';
import './style.css';


export default function SettingsScreen() {
  return (
    <div className="settings_screen" >
      <div className='settings_wrapper'>
        <AddingComponent >
          <AnswerComponentArea />
          <AudioComponent />
          <InputComponentItem />
          <SelectComponentItem />
          <RadialBtnsComponent >
            <TitleComponent title="dcsdcdcsdc" />
          </RadialBtnsComponent>
          <CountInput />
          <DelayComponent />
          <RandomizeComponentArea />
          <AccountSettingsCopy />
          <ManualSelect />
        </AddingComponent>
      </div>
    </div>
  );
}