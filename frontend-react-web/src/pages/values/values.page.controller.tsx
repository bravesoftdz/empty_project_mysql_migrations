// import * as React from 'react';
import BaseController, { BaseColumnInfo, BaseLoadingInfo } from '../../components/base.controller';
import ApiValuesProxy from '../../client-api/api-values-proxy';
import Api from '../../client-api/api';
import { Values } from '../../client-api/api-models';

class ValuesController extends BaseController<Values> {

	constructor(props: any) {
		super(props);
	}

	protected getCaption(): string {
		return 'Value List';
	}

	protected getDescription(): string {
		return 'List of Values loaded from the database';
	}

	protected getLoadindInfo(): BaseLoadingInfo {
		return {
			caption: 'Wait',
			message: 'Loading Values List...'
		}
	}

	protected getColumnInfo(): BaseColumnInfo[] {
		return [
			{ fieldName: 'Id', fieldCaption: 'Code', fieldSize: '15%' },
			{ fieldName: 'Name', fieldCaption: 'Value Name' }
		];
	}

	protected getApi(): ApiValuesProxy {
		return Api.Values();
	}

	protected getTitle(): string {
		return 'Values List';
	}	
}

export default ValuesController;