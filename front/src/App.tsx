import * as React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

class App extends React.Component<any, any> {
  public state = {
    editMode: false,
  };

  public onChangeLayout = (layout) => {
    console.log(layout);
  };

  public getLayout() {
    const layout = [
      { i: 'b', x: 1, y: 0, w: 2, h: 1 },
      { i: 'a', x: 4, y: 0, w: 2, h: 1 },
      { i: 'c', x: 7, y: 0, w: 2, h: 1 },
    ];
    return {
      lg: layout,
      md: layout,
      sm: layout,
      xs: layout,
      xxs: layout,
    };
  }

  public changeMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  public render() {
    return (
      <div>
        <ResponsiveGridLayout
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          className="layout"
          layouts={this.getLayout()}
          rowHeight={30}
          onLayoutChange={this.onChangeLayout}
          draggableHandle=".drag-me"
        >
          <div key="a">
            <textarea>Hello A</textarea>
            <span className="drag-me">D</span>
          </div>
          <div key="b">
            <textarea>Hello B</textarea>
            <span className="drag-me">D</span>
          </div>
          <div key="c">
            <textarea>Hello C</textarea>
            <span className="drag-me">D</span>
          </div>
        </ResponsiveGridLayout>
      </div>
    );
  }
}

export default App;
