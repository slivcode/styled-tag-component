# styled-tag-component

Inspired by `styled-component`.
< 1kb gzip utility library centralized styling solution.
If `:hover` or `@mediaquery` is needed use `glamor-helper` package, that provides a rule field.

```js
import StyledTagComponent from 'styled-tag-component';
let Cmp = StyledTagComponent<{isActive, isHidden}>({
    ep: ['isActive', 'isHidden'], // declare extra props to avoid react invalid props warning.
    tag: 'span' // default as div,
    cn: ({isActive, isHidden}) => [
        [true, 'base'], // always add the base classname.
        [isActive, 'active'], // [bool, string] pair if props have isActive => add classname 'active'
        [!isActive, 'inactive'],
    ],
    style: ({isActive}) => ({
        color: [
            [isActive, 'red'],
            [true, 'blue'],
        ],
        background: 'green'
    }),
    nullIf: ({isHidden}) => isHidden
}); // => SFC<{isActive, isHidden, innerRef}>

all the options are optional.

<Cmp isActive={false} isHidden={true} onClick={console.log}/>;
// a stateless component, that renders null.
<Cmp isActive innRef={el => el.click()} onClick={() => alert('clicked')}>text</Cmp>;
// renders <span class="base active" style="color:red;background:green;">text</span>
// innerRef is the eqv. of ref.
```

as oppose to normally people do.
```js
let styles = {
    active: {...},

}
<span style={styles.active}></span> // ... repeat 50 times.
```

You can still use `style` and `className` by taking `style` as `ep`
```js
{
ep: ['style'],
style: ({style}) => merge(style, {transtion: '0.5s'}) // etc. merge the value yourself
}
```