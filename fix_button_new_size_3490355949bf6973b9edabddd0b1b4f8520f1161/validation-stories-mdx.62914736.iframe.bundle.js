"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[3126,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");const MDXContext=react.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react.useContext(MDXContext);return react.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=(mod=mdx_react_shim_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod)),((target,mod,secondTarget)=>{__copyProps(target,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")})(mdx_react_shim_exports,__webpack_require__("./node_modules/@mdx-js/react/index.js"),module.exports)},"./docs/validation.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page}});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_core_components_core_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code"},(0,_home_runner_work_core_components_core_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Patterns/Валидация",parameters:{previewTabs:{canvas:{hidden:!0}}},id:"Guidelines/Validation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"валидация",children:"Валидация"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Процесс проверки значений, указанных пользователем с последующим отображением найденных ошибок."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"принципы",children:"Принципы"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Лучшая валидация — это отсутствие потребности в валидации. Старайтесь проектировать интерфейс таким образом,\nчтобы пользователю было сложно совершить ошибку. Для этого:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Используйте маски, чтобы ограничить ввод неподходящих символов и задать корректный формат ввода."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Используйте пикеры и другие контролы, не позволяющие указать ошибочное значение."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Пишите подсказки для пользователя, используйте тултипы, хинты или плейсхолдеры там, где это необходимо."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"паттерны-валидации",children:"Паттерны валидации"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"В порядке скорости реагирования:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Мгновенная."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"При потере фокуса."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"При отправке формы."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"В интерфейсах нужно стремиться сообщить об ошибке как можно раньше, чтобы пользователю не приходилось возвращаться.\nПри проектировании необходимо учитывать возможные технические ограничения и подбирать оптимальный паттерн под задачу."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"мгновенная-валидация",children:"Мгновенная валидация"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Если в процессе ввода значения можно проверить его на корректность, можно использовать мгновенную валидацию.\nОшибки, которые может подсветить такая валидация, обычно связаны с вводом недопустимых символов,\nнапример ввод букв в цифровое поле. В подобных случаях более сильным решением будет использование масок в полях ввода,\nкоторые не допустят ввод ошибочных значений. А значит такая валидация будет не нужна."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"В примере ниже поля предназначены для ввода цифр."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{live:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"const NumberInput = () => {\n    const [value, setValue] = React.useState('');\n    const [error, setError] = React.useState();\n\n    const handleChange = (e) => {\n        const inputValue = e.target.value;\n        setValue(inputValue);\n\n        if (!/^\\d*$/.test(inputValue)) {\n            setError('Введено недопустимое значение');\n        } else {\n            setError(false);\n        }\n    };\n\n    return (\n        <Input\n            value={value}\n            onChange={handleChange}\n            size='m'\n            block={true}\n            placeholder='Мгновенная валидация'\n            error={error}\n        />\n    );\n};\n\nconst MaskedNumberInput = () => {\n    const [value, setValue] = React.useState('');\n\n    return (\n        <MaskedInput\n            value={value}\n            onChange={(e) => setValue(e.target.value)}\n            size='m'\n            block={true}\n            placeholder='Маска'\n            mask={(rawValue) => new Array(rawValue.length).fill(/\\d/)}\n        />\n    );\n};\n\nrender(() => {\n    return (\n        <div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n            <NumberInput />\n            <Gap size='m' />\n            <MaskedNumberInput />\n        </div>\n    );\n});\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"валидация-по-потере-фокуса",children:"Валидация по потере фокуса"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Валидация срабатывает сразу после потери валидируемым компонентом фокуса.\nЕсли найдена ошибка, компонент переходит в состояние ошибки, но фокус к нему не возвращается.\nСостояние ошибки должно быть снято как только пользователь начнет изменять значение."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Паттерн хорошо подходит для всех случаев, кроме проверки на заполненность обязательных полей.\nУ пользователя может быть свой план заполнения полей, которого он придерживается.\nТолько после отправки формы мы можем с уверенностью сказать, что какие-то из обязательных полей не заполнены и это ошибка."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{live:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"const InputWrapper = ({ patronymic, placeholder, errMsg }) => {\n    const [value, setValue] = React.useState('');\n    const [error, setError] = React.useState(false);\n\n    const validate = () => {\n        if (value.toLowerCase() !== patronymic) {\n            setError(errMsg);\n        }\n    };\n\n    const handleChange = (e) => {\n        setValue(e.target.value);\n        setError(false);\n    };\n\n    const handleBlur = () => validate();\n\n    return (\n        <Input\n            value={value}\n            onChange={handleChange}\n            onBlur={handleBlur}\n            size='m'\n            block={true}\n            placeholder={placeholder}\n            error={error}\n        />\n    );\n};\n\nrender(() => {\n    return (\n        <div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n            <InputWrapper\n                placeholder='Отчество Александра Пушкина'\n                patronymic='сергеевич'\n                errMsg='Александр Сергеевич – наше всё'\n            />\n            <Gap size='m' />\n            <InputWrapper\n                placeholder='Отчество Афанасия Фета'\n                patronymic='афанасьевич'\n                errMsg='Отца Афанасия тоже звали Афанасием'\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"валидация-по-отправке-формы",children:"Валидация по отправке формы"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Проверка происходит после того, как пользователь нажал кнопку отправки данных:\nвсе поля с ошибками на форме переходят в состояние ошибки, первый контрол с ошибкой получает фокус,\nстраница прокручивается к нему."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Подобный паттерн хорошо подходит для проверки на заполненность обязательных полей,\nтак как в случае отправки формы мы уверены что пользователь считает форму заполненной."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{live:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"const data = {\n    pushkin: {\n        patronymic: 'сергеевич',\n        desc: 'Отчество Александра Пушкина',\n        errMsg: 'Александр Сергеевич – наше всё',\n    },\n    fet: {\n        patronymic: 'афанасьевич',\n        desc: 'Отчество Афанасия Фета',\n        errMsg: 'Отца Афанасия тоже звали Афанасием',\n    },\n};\n\nconst dataKeys = Object.keys(data);\n\nconst validateForm = (form) => {\n    let errors = {};\n\n    dataKeys.forEach((key) => {\n        if (data[key].patronymic !== form.values[key].toLowerCase()) {\n            errors[key] = data[key].errMsg;\n        }\n    });\n\n    return Object.keys(errors).length > 0 ? errors : null;\n};\n\nconst getInitialState = () => {\n    const initialValues = dataKeys.reduce((result, key) => {\n        result[key] = '';\n        return result;\n    }, {});\n\n    return { values: initialValues, errors: initialValues };\n};\n\nrender(() => {\n    const [form, setForm] = React.useState(getInitialState);\n\n    const handleSubmit = (e) => {\n        e.preventDefault();\n\n        const errors = validateForm(form);\n        if (errors) {\n            setForm((prevState) => ({ ...prevState, errors: { ...prevState.errors, ...errors } }));\n        }\n    };\n\n    const handleChange = (e) => {\n        const name = e.target.name;\n\n        setForm((prevState) => ({\n            ...prevState,\n            values: { ...prevState.values, ...{ [name]: e.target.value } },\n            errors: { ...prevState.errors, ...{ [name]: '' } },\n        }));\n    };\n\n    return (\n        <form\n            style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}\n            onSubmit={handleSubmit}\n        >\n            {dataKeys.map((key, idx) => (\n                <span key={key}>\n                    <Input\n                        value={form.values[key]}\n                        error={form.errors[key]}\n                        name={key}\n                        onChange={handleChange}\n                        size='m'\n                        block={true}\n                        placeholder={data[key].desc}\n                    />\n                    {idx !== dataKeys.length - 1 && <Gap size='m' />}\n                </span>\n            ))}\n\n            <Gap size='m' />\n            <Button view='primary' size='m' type='submit'>\n                Отправить форму\n            </Button>\n        </form>\n    );\n});\n"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Patterns/Валидация",id:"Guidelines/Validation",parameters:{previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_core_components_core_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta;const __namedExportsOrder=["__page"]}}]);