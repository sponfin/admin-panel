import React from "react";
import cn from "classnames";

import { Input, Label, Checkbox, Radio, Button, Dropdown } from "components";

import { ReactComponent as IconSun } from "Icons/sun.svg";
import { ReactComponent as IconMoon } from "Icons/moon.svg";

import styles from "./UiKit.module.css";

export const UiKit = () => {
  const classBlockWrapper = cn(styles.blockWrapper, styles.pageBlockWrapper);

  return (
    <div className={styles.page}>
      {/* Input-Date */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>Input-date</p>
        <Label
          label="Дата и время заказа"
          className={styles.labelInput}
          htmlFor="Input1"
        />
        <Input id="Input1" className={styles.blockWrapperInputDate} />
        <Label
          label="Дата и время заказа"
          className={styles.labelInput}
          htmlFor="Input2"
        />
        <Input
          id="Input2"
          isError
          isNotEmpty={true}
          htmlFor="Input3"
          className={styles.blockWrapperInputDate}
        />
        <Label
          label="Дата и время заказа"
          className={styles.labelInput}
          htmlFor="Input3"
        />
        <Input
          id="Input3"
          value="06.12.2021"
          isLocked
          isDisabled={true}
          className={styles.blockWrapperInputDate}
        />
      </div>

      {/* Searchbar */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>searchbar</p>

        <Input
          view="search"
          placeholder="Номер заказа или ФИО"
          className={styles.blockWrapperSearchbar}
        />
        <Input
          view="search"
          placeholder="Номер заказа или ФИО"
          value="50744"
          isNotEmpty={true}
          className={styles.blockWrapperSearchbar}
        />
      </div>
      {/* Checkbox */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>Checkbox</p>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            className={styles.checkboxGroup}
            classCustomCheckboxLoc={styles.customCheckboxloc}
            classlabelLoc={styles.labelLoc}
            id="checkbox1"
            htmlFor="checkbox1"
          />
          <Checkbox
            className={styles.checkboxGroup}
            classCustomCheckboxLoc={styles.customCheckboxloc}
            classlabelLoc={styles.labelLoc}
            id="checkbox2"
            htmlFor="checkbox2"
          />
        </div>
      </div>
      {/* Radio */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>Radio</p>
        <div className={styles.radioWrapper}>
          <Radio
            className={styles.radioGroup}
            classCustomRadioLoc={styles.customRadioLoc}
            classlabelLoc={styles.labelLoc}
            type="radio"
            name="radio"
            id="radio1"
            htmlFor="radio1"
            isRadio
          />
          <Radio
            className={styles.radioGroup}
            classCustomRadioLoc={styles.customRadioLoc}
            classlabelLoc={styles.labelLoc}
            type="radio"
            name="radio"
            id="radio2"
            htmlFor="radio2"
            isRadio
            checked
          />
        </div>
      </div>
      {/* Button */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>Button</p>
        <div className={styles.buttonWrapper}>
          <div className={styles.buttonWrapperItem}>
            <Button
              className={styles.buttonGroup}
              theme="main"
              size="large"
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className={styles.buttonGroup} theme="main" size="large">
              Text here
            </Button>

            <Button
              className={styles.buttonGroup}
              theme="main"
              size="large"
              icon={IconSun}
            />

            <br />
            <br />

            <Button
              className={styles.buttonGroup}
              theme="main"
              size="small"
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className={styles.buttonGroup} theme="main" size="small">
              Text here
            </Button>

            <Button
              className={styles.buttonGroup}
              theme="main"
              size="small"
              icon={IconSun}
            />
          </div>

          <div className={styles.buttonWrapperItem}>
            <Button
              className={styles.buttonGroup}
              theme="blue"
              size="large"
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className={styles.buttonGroup} theme="blue" size="large">
              Text here
            </Button>

            <Button
              className={styles.buttonGroup}
              theme="blue"
              size="large"
              icon={IconSun}
            />

            <br />
            <br />

            <Button
              className={styles.buttonGroup}
              theme="blue"
              size="small"
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className={styles.buttonGroup} theme="blue" size="small">
              Text here
            </Button>

            <Button
              className={styles.buttonGroup}
              theme="blue"
              size="small"
              icon={IconSun}
            />
          </div>

          <div className={styles.buttonWrapperItem}>
            <Button
              className={styles.buttonGroup}
              theme="black"
              size="large"
              icon={IconSun}
            >
              Text here
            </Button>

            <Button className={styles.buttonGroup} theme="black" size="large">
              Text here
            </Button>

            <Button
              className={styles.buttonGroup}
              theme="black"
              size="large"
              icon={IconSun}
            />
          </div>
        </div>
      </div>
      {/* Dropdown */}
      <div className={classBlockWrapper}>
        <p className={styles.blockWrapperTitle}>Dropdown</p>
        <div className={styles.dropdownGoup}>
          <div className={styles.dropdownGoupItem}>
            <Dropdown>
              <Checkbox
                className={styles.checkbox}
                classCustomCheckboxLoc={styles.customCheckboxloc}
                classlabelLoc={styles.labelLoc}
                id="new"
                htmlFor="new"
                label="Новый"
              />
              <Checkbox
                className={styles.checkbox}
                classCustomCheckboxLoc={styles.customCheckboxloc}
                classlabelLoc={styles.labelLoc}
                id="calcilation"
                label="Расчет"
                htmlFor="calcilation"
              />
              <Checkbox
                className={styles.checkbox}
                classCustomCheckboxLoc={styles.customCheckboxloc}
                classlabelLoc={styles.labelLoc}
                id="confirmed"
                htmlFor="confirmed"
                label="Подтвержден"
              />
              <Checkbox
                className={styles.checkbox}
                classCustomCheckboxLoc={styles.customCheckboxloc}
                classlabelLoc={styles.labelLoc}
                id="postponed"
                htmlFor="postponed"
                label="Отложен"
              />
              <Checkbox
                className={styles.checkbox}
                classCustomCheckboxLoc={styles.customCheckboxloc}
                classlabelLoc={styles.labelLoc}
                id="completed"
                htmlFor="completed"
                label="Выполнен"
              />
              <Checkbox
                className={styles.checkbox}
                classCustomCheckboxLoc={styles.customCheckboxloc}
                classlabelLoc={styles.labelLoc}
                id="canceled"
                htmlFor="canceled"
                label="Отменен"
              />
            </Dropdown>

            <Dropdown>
              <Radio
                className={styles.radio}
                classCustomRadioLoc={styles.customRadioLoc}
                type="radio"
                name="radio"
                id="newR"
                ss
                htmlFor="newR"
                label="Новый"
              />
              <Radio
                className={styles.radio}
                classCustomRadioLoc={styles.customRadioLoc}
                type="radio"
                name="radio"
                id="calcilationR"
                label="Расчет"
                htmlFor="calcilationR"
              />
              <Radio
                className={styles.radio}
                classCustomRadioLoc={styles.customRadioLoc}
                type="radio"
                name="radio"
                id="radioConfirmed"
                label="Подтвержден"
                htmlFor="radioConfirmed"
              />
              <Radio
                className={styles.radio}
                classCustomRadioLoc={styles.customRadioLoc}
                type="radio"
                name="radio"
                id="radioPostponed"
                label="Отложен"
                htmlFor="radioPostponed"
              />
              <Radio
                className={styles.radio}
                classCustomRadioLoc={styles.customRadioLoc}
                type="radio"
                name="radio"
                id="radioCompleted"
                label="Выполнен"
                htmlFor="radioCompleted"
              />
              <Radio
                className={styles.radio}
                classCustomRadioLoc={styles.customRadioLoc}
                type="radio"
                name="radio"
                id="radioCanceled"
                label="Отменен"
                htmlFor="radioCanceled"
              />
            </Dropdown>
          </div>
          <div className={styles.dropdownGoupItem}>
            <Dropdown>
              <Label
                label="Номер страницы"
                className={styles.labelInput}
                htmlFor="Input1"
              />
              <Input
                id="Input1"
                className={styles.blockWrapperInputDate}
                placeholder="Введите номер"
              />
            </Dropdown>
            <Dropdown>
              <Label
                label="Удалить n записей?"
                className={styles.dropdownLabel}
              />
              <Button
                className={styles.dropdownButton}
                theme="blue"
                size="small"
              >
                Удалить
              </Button>
              <Button theme="main" size="small">
                Отмена
              </Button>
            </Dropdown>
            <Dropdown>
              <Label label="Выберите тему" className={styles.dropdownLabel} />
              <Button
                className={styles.dropdownButton}
                theme="blue"
                size="small"
                icon={IconSun}
              >
                Светлая
              </Button>
              <Button theme="main" size="small" icon={IconMoon}>
                Темная
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
