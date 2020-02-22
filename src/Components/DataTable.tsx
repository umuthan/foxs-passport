import React, { useState, useEffect, forwardRef } from 'react';

import { useHistory } from "react-router-dom";

import { Grid,
         Paper,
         CircularProgress } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Image as ImageIcon,
         LocationOn as LocationIcon,
         ArrowUpward as ArrowUpwardIcon,
         ChevronLeft as ChevronLeftIcon,
         ChevronRight as ChevronRightIcon,
         Clear as ClearIcon,
         Edit as EditIcon,
         FilterList as FilterListIcon,
         FirstPage as FirstPageIcon,
         LastPage as LastPageIcon,
         RemoveCircle as RemoveIcon,
         Search as SearchIcon } from '@material-ui/icons';

import MaterialTable, { Column } from 'material-table';

import { getPosts } from '../Api/Api';

import DialogView from './DialogView';

interface Row {
  title: string;
  content: string;
  lat?: number;
  long?: number;
  image_url?: string;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

interface IProps {
  remove: boolean;
  edit:boolean
}

const DataTable: React.FC<IProps> = (props) => {

  const tableIcons = {
    Clear: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ClearIcon {...props} ref={ref} />),
    Filter: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FilterListIcon {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FirstPageIcon {...props} ref={ref} />),
    LastPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <LastPageIcon {...props} ref={ref} />),
    NextPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRightIcon {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronLeftIcon {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ClearIcon {...props} ref={ref} />),
    Search: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <SearchIcon {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ArrowUpwardIcon {...props} ref={ref} />)
  };

  const {
    remove,
    edit
  } = props;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [table, setTable] = useState<TableState>({
    columns: [
      { title: 'Title', field: 'title' },
      { title: 'Content', field: 'content' }
    ],
    data: []
  });

  useEffect(() => {

    loading && (
      getPosts().then(posts=>{
        if(posts.length >= 0) {
          setTable({
            columns: table.columns,
            data: posts
          })
          setLoading(false);
        } else {
          setLoading(false);
          setError(true);
        }
      })
    )

  }, [loading, table.columns]);

  const [dialog, setDialog] = useState({
    type: '',
    title: '',
    content: {},
    id: '',
    callbackFunction: null
  });

  const openDialog = (type:string, title:string, content:object, callbackFunction?:any) => {
    setDialog({
      type: type,
      title: title,
      content: content,
      id: type+'Dialog'+Math.random(),
      callbackFunction: callbackFunction
    });
  };

  const history = useHistory();

  return (
    <>
      {loading ? (
        <Grid container justify={'center'}>
          <CircularProgress />
        </Grid>
      ) : error ? (
        <Grid container justify={'center'}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Error while connecting to API.
            </Alert>
          </Grid>
        </Grid>
      ) : (
        <MaterialTable
          icons={tableIcons}
          title=""
          columns={table.columns}
          data={table.data}
          components={{
            Container: props => <Paper {...props} elevation={0}/>
          }}
          actions={[
            (rowData:any) => ({
              icon: () => <ImageIcon />,
              tooltip: 'Image',
              onClick: (event, rowData:any) => {
                openDialog('image', rowData.title, {image: rowData.image_url})
              },
              hidden: !rowData.image_url
            }),
            (rowData:any) => ({
              icon: () => <LocationIcon />,
              tooltip: 'Location',
              onClick: (event, rowData:any) => {
                openDialog('map', rowData.title, {lat: rowData.lat, long: rowData.long})
              },
              hidden: !rowData.lat && !rowData.long
            }),
            {
              icon: () => <EditIcon />,
              tooltip: 'Edit',
              onClick: (event, rowData:any) => {
                history.push('/edit/'+rowData.id);
              },
              hidden: !edit
            },
            {
              icon: () => <RemoveIcon />,
              tooltip: 'Remove',
              onClick: (event, rowData:any) => {
                openDialog('delete', rowData.title, {id: rowData.id}, () => setLoading(true))
              },
              hidden: !remove
            }
          ]}
          options={{
            actionsColumnIndex: -1
          }}
        />
      )}
    <DialogView type={dialog.type} title={dialog.title} content={dialog.content} id={dialog.id} callbackFunction={dialog.callbackFunction} />
    </>
  );
}

export default DataTable;
