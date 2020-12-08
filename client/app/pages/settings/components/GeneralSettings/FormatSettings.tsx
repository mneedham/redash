import React from "react";
import { SettingsEditorPropTypes, SettingsEditorDefaultProps } from "../prop-types";
import Form from "antd/lib/form";
import Select from "antd/lib/select";
import Skeleton from "antd/lib/skeleton";
import DynamicComponent from "@/components/DynamicComponent";
import { clientConfig } from "@/services/auth";

export default function FormatSettings(props: any) {
  const { values, onChange, loading } = props;

  return (
    <DynamicComponent name="OrganizationSettings.FormatSettings" {...props}>
      <Form.Item label="Date Format">
        {loading ? (
          <Skeleton.Input style={{ width: 300 }} active />
        ) : (
          <Select
            value={values.date_format}
            onChange={value => onChange({ date_format: value })}
            data-test="DateFormatSelect">
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'dateFormatList' does not exist on type '... Remove this comment to see the full error message */}
            {clientConfig.dateFormatList.map((dateFormat: any) => <Select.Option key={dateFormat}>{dateFormat}</Select.Option>)}
          </Select>
        )}
      </Form.Item>
      <Form.Item label="Time Format">
        {loading ? (
          <Skeleton.Input style={{ width: 300 }} active />
        ) : (
          <Select
            value={values.time_format}
            onChange={value => onChange({ time_format: value })}
            data-test="TimeFormatSelect">
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'timeFormatList' does not exist on type '... Remove this comment to see the full error message */}
            {clientConfig.timeFormatList.map((timeFormat: any) => <Select.Option key={timeFormat}>{timeFormat}</Select.Option>)}
          </Select>
        )}
      </Form.Item>
    </DynamicComponent>
  );
}

FormatSettings.propTypes = SettingsEditorPropTypes;

FormatSettings.defaultProps = SettingsEditorDefaultProps;