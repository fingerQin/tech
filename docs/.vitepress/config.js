export default {
    lang: 'zh-CN',
    title: 'Tech Book',
    description: '十级孤独程序员老兵，叨叨逼逼技术，来看否？',

    themeConfig: {
        siteTitle: 'Tech Book',
        logo: '/my-logo.svg',
        lastUpdated: true,

        nav: [
            { text: '前端', link: '/frontend/' },
            { text: 'PHP', link: '/php/' },
            { text: 'MySQL', link: '/mysql/' },
            { text: 'Nginx', link: '/nginx/' },
            { text: 'Linux', link: '/linux/' },
            { text: '项目设计', link: '/project/' },
            { text: '基础理论', link: '/basic-theor/' },
        ],

        sidebar: {
            '/frontend/': [{
                    text: 'HTML',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/frontend/html/guide.html' }
                    ]
                },
                {
                    text: 'CSS',
                    collapsed: false,
                    items: [
                        { text: '概述', link: '/frontend/css/guide.html' },
                        { text: 'CSS 语法', link: '/frontend/css/syntax.html' },
                        { text: 'CSS id / class 选择器', link: '/frontend/css/id-class.html' },
                        { text: 'CSS 创建', link: '/frontend/css/create.html' },
                        { text: 'CSS background(背景)', link: '/frontend/css/background.html' },
                        { text: 'CSS text(文本)', link: '/frontend/css/background.html' },
                        { text: 'CSS font(字段)', link: '/frontend/css/font.html' },
                        { text: 'CSS link(链接)', link: '/frontend/css/link.html' },
                        { text: 'CSS ul / ol(列表)', link: '/frontend/css/ul-ol.html' },
                        { text: 'CSS table(列表)', link: '/frontend/css/table.html' },
                        { text: 'CSS box(盒子模型)', link: '/frontend/css/boxmodel.html' },
                        { text: 'CSS border(边框)', link: '/frontend/css/border.html' },
                        { text: 'CSS outline(轮廓)', link: '/frontend/css/outline.html' },
                        { text: 'CSS margin(外边距)', link: '/frontend/css/margin.html' },
                        { text: 'CSS padding(内边距)', link: '/frontend/css/padding.html' },
                        { text: 'CSS 分组/嵌套', link: '/frontend/css/grouping-nesting.html' },
                        { text: 'CSS dimension(尺寸)', link: '/frontend/css/dimension.html' },
                        { text: 'CSS display / visibility', link: '/frontend/css/display-visibility.html' },
                        { text: 'CSS position(定位)', link: '/frontend/css/position.html' },
                        { text: 'CSS overflow', link: '/frontend/css/overflow.html' },
                        { text: 'CSS float(浮云)', link: '/frontend/css/float.html' },
                        { text: 'CSS 对齐', link: '/frontend/css/align.html' },
                        { text: 'CSS 组合选择符', link: '/frontend/css/combinators.html' },
                        { text: 'CSS 伪类', link: '/frontend/css/pseudo-classes.html' },
                        { text: 'CSS 伪元素', link: '/frontend/css/pseudo-elements.html' },
                        { text: 'CSS 图像透明/不透明', link: '/frontend/css/image-transparency.html' },
                        { text: 'CSS 图像拼合技术', link: '/frontend/css/image-sprites.html' },
                        { text: 'CSS 媒体类型', link: '/frontend/css/mediatypes.html' },
                        { text: 'CSS 属性选择器', link: '/frontend/css/attribute-selectors.html' },
                        { text: 'CSS 表单', link: '/frontend/css/form.html' },
                        { text: 'CSS 计数器', link: '/frontend/css/counters.html' },
                        { text: 'CSS !important', link: '/frontend/css/important.html' },
                        { text: 'CSS border-radius(圆角)', link: '/frontend/css/border-radius.html' },
                        { text: 'CSS 渐变', link: '/frontend/css/gradients.html' },
                        { text: 'CSS 2D 转换', link: '/frontend/css/2dtransforms.html' },
                        { text: 'CSS 3D 转换', link: '/frontend/css/3dtransforms.html' },
                        { text: 'CSS 效果过渡', link: '/frontend/css/transitions.html' },
                        { text: 'CSS 动画', link: '/frontend/css/animations.html' },
                        { text: 'CSS 多列布局', link: '/frontend/css/multiple-columns.html' },
                        { text: 'CSS 多列布局', link: '/frontend/css/multiple-columns.html' },
                    ]
                }
            ],

            '/php/': [{
                    text: '基础',
                    collapsed: false,
                    items: [
                        { text: 'PHP 安装', link: '/php/basics/install.html' },
                        { text: 'PHP 各版本特性', link: '/php/basics/version.html' },
                        { text: 'PHP 配置', link: '/php/basics/config.html' },
                        { text: 'PHP-FPM', link: '/php/basics/php-fpm.html' },
                        { text: 'PHP 数据类型', link: '/php/basics/data-type.html' },
                        { text: 'PHP GC(垃圾回收)', link: '/php/basics/gc.html' },
                        { text: 'PHP Error / Exception', link: '/php/basics/error-exception.html' },
                        { text: 'PHP 生成器', link: '/php/basics/generators.html' },
                        { text: 'PHP 纤程', link: '/php/basics/fibers.html' },
                        { text: 'PHP 注解', link: '/php/basics/attributes-overview.html' },
                        { text: 'PHP Socket', link: '/php/basics/socket.html' },
                        { text: 'PHP Session / Cookie', link: '/php/basics/session-cookie.html' },
                    ]
                },
                {
                    text: '高阶',
                    collapsed: false,
                    items: [
                        { text: 'Session 分布式', link: '/php/adv/session-distribute.html' },
                        { text: '消息队列', link: '/php/adv/queue.html' },
                        { text: '分布式锁', link: '/php/adv/distribute-lock.html' },
                        { text: '加密/解密', link: '/php/adv/encryption.html' },
                        { text: 'UUID', link: '/php/adv/uuid.html' },
                    ]
                },
                {
                    text: '应用',
                    collapsed: false,
                    items: [
                        { text: '生成二维码', link: '/php/application/qrcode.html' },
                        { text: '邮件收发', link: '/php/application/email.html' },
                        { text: '短信发送', link: '/php/application/ems.html' },
                        { text: '网页抓取', link: '/php/application/webpage-crawl.html' },
                        { text: 'Word 读取/生成', link: '/php/application/word.html' },
                        { text: 'Excel 读取/生成', link: '/php/application/excel.html' },
                        { text: 'PPT 读取/生成', link: '/php/application/ppt.html' },
                        { text: '网页截图', link: '/php/application/webpage-image.html' },
                        { text: '日期/时间', link: '/php/application/date.html' },
                        { text: 'Guzzle 网络请求库', link: '/php/application/guzzle.html' },
                    ]
                }
            ],

            '/mysql/': [{
                    text: 'MySQL 基础',
                    collapsed: false,
                    items: [
                        { text: 'MySQL 版本差异', link: '/mysql/basics/versions.html' },
                        { text: 'MySQL 数据类型', link: '/mysql/basics/data-type.html' },
                        { text: 'MySQL 操作符与优先级', link: '/mysql/basics/op.html' },
                        { text: 'MySQL 配置管理', link: '/mysql/basics/config.html' },
                        { text: 'MySQL 存储引擎', link: '/mysql/basics/engine.html' },
                        { text: 'MySQL 日志管理', link: '/mysql/basics/log.html' },
                        { text: 'MySQL 国际化', link: '/mysql/basics/i18n.html' },
                        { text: 'MySQL 索引失效总结', link: '/mysql/basics/index-failed.html' }
                    ]
                },
                {
                    text: 'MySQL 权限管理',
                    collapsed: false,
                    items: [
                        { text: 'MySQL 新增用户', link: '/mysql/privilege/add-user.html' },
                        { text: 'MySQL 删除用户', link: '/mysql/privilege/delete-user.html' },
                        { text: 'MySQL 设置用户权限', link: '/mysql/privilege/privilege.html' },
                        { text: 'MySQL 用户密码修改', link: '/mysql/privilege/pwd-edit.html' }
                    ]
                },
                {
                    text: 'SQL 语句语法',
                    collapsed: false,
                    items: [{
                            text: '数据定义语句 DDL',
                            collapsed: false,
                            items: [
                                { text: 'ALTER DATABASE 语法', link: '/mysql/sql/ddl/alter-database.md' },
                                { text: 'CREATE DATABASE 语法', link: '/mysql/sql/ddl/create-table.md' },
                                { text: 'DROP DATABASE 语法', link: '/mysql/sql/ddl/drop-database.md' },

                                { text: 'ALTER TABLE 语法', link: '/mysql/sql/ddl/alter-table.md' },
                                { text: 'CREATE TABLE 语法', link: '/mysql/sql/ddl/create-table.md' },
                                { text: 'DROP TABLE 语法', link: '/mysql/sql/ddl/drop-table.md' },

                                { text: 'ALTER TABLE 语法', link: '/mysql/sql/ddl/alter-index.md' },
                                { text: 'CREATE INDEX 语法', link: '/mysql/sql/ddl/create-index.md' },
                                { text: 'DROP INDEX 语法', link: '/mysql/sql/ddl/drop-index.md' },

                                { text: 'RENAME TABLE 语法', link: '/mysql/sql/ddl/rename-table.md' }
                            ]
                        },
                        {
                            text: '数据操作语句 DML',
                            collapsed: false,
                            items: [
                                { text: 'SELECT 语法', link: '/mysql/sql/dml/select.md' },
                                { text: 'INSERT 语法', link: '/mysql/sql/dml/insert.md' },
                                { text: 'UPDATE 语法', link: '/mysql/sql/dml/update.md' },
                                { text: 'DELETE 语法', link: '/mysql/sql/dml/delete.md' },
                                { text: 'REPLACE 语法', link: '/mysql/sql/dml/replace.md' },
                                { text: 'TRUNCATE 语法', link: '/mysql/sql/dml/truncate.md' },

                                { text: 'HANDLER 语法', link: '/mysql/sql/dml/handler.md' },
                                { text: 'DO 语法', link: '/mysql/sql/dml/do.md' },
                                { text: 'LOAD DATA INFILE 语法', link: '/mysql/sql/dml/load-data-infile.md' },
                            ]
                        }
                    ]
                }
            ],

            '/nginx/': [{
                text: 'Nginx 基础',
                collapsed: false,
                items: [
                    { text: 'Nginx 安装', link: '/nginx/basics/install.html' },
                    { text: 'Nginx 配置', link: '/nginx/basics/config.html' },
                    { text: 'Nginx 优化', link: '/nginx/basics/optimize.html' },
                    { text: 'Nginx 日志', link: '/nginx/basics/log.html' },
                    { text: 'Nginx 命令行/服务管理', link: '/nginx/basics/manage.html' },
                ]
            }, {
                text: 'Nginx 应用',
                collapsed: false,
                items: [
                    { text: '配置虚拟机 vhost', link: '/nginx/adv/vhost.html' },
                    { text: '配置代理 proxy', link: '/nginx/adv/proxy.html' },
                    { text: '防盗链', link: '/nginx/adv/doorchain.html' },
                    { text: '负载均衡', link: '/nginx/adv/load-banlance.html' },
                    { text: '站点支持 HTTPS', link: '/nginx/adv/https.html' },
                    { text: 'Gzip 请求压缩', link: '/nginx/adv/gzip.html' },
                    { text: 'rewrite URL 重写', link: '/nginx/adv/rewrite.html' },
                    { text: 'Nginx + Keepalived 实现高可用', link: '/nginx/adv/keepalived.html' },
                    { text: 'Nginx 主模块', link: '/nginx/adv/main-modules.html' },
                    { text: 'Nginx 事件模块', link: '/nginx/adv/event-modules.html' },
                    { text: 'Nginx 表态缓存', link: '/nginx/adv/static-cache.html' },
                ]
            }],

            '/project/': [{
                text: '电商篇',
                items: [
                    { text: 'Index', link: '/project/' },
                    { text: 'One', link: '/project/one' },
                    { text: 'Two', link: '/project/two' }
                ]
            }],

            '/linux/': [{
                    text: '基础',
                    collapsed: false,
                    items: [
                        { text: '配置优化', link: '/linux/basics/config-optimize.html' },
                        { text: '账号管理&权限设置', link: '/linux/basics/privilege.html' },
                        { text: '计划任务(定时器)', link: '/linux/basics/crontab.html' },
                        { text: 'yum', link: '/linux/basics/yum.html' },
                        { text: 'SSH 免密登录', link: '/linux/basics/ssh-login.html' },
                        { text: 'rc.local(启动管理)', link: '/linux/basics/rc-local.html' },
                        { text: '系统环境变量设置', link: '/linux/basics/profile.html' },
                        { text: 'Linux 系统目录结构', link: '/linux/basics/linux-dir.html' },
                    ],
                },
                {
                    text: 'vim 程序编辑器',
                    collapsed: false,
                    items: [
                        { text: 'vi与vim', link: '/linux/vim/vi-vim.html' },
                        { text: 'vi 的使用', link: '/linux/vim/vi.html' },
                        { text: 'vim 的额外功能', link: '/linux/vim/vim-other.html' },
                        { text: 'vim 使用注意事项', link: '/linux/vim/vim-notice.html' }
                    ]
                },
                {
                    text: 'shell 脚本',
                    collapsed: false,
                    items: [
                        { text: '什么是 shell 脚本', link: '/linux/shell/shell.html' },
                        { text: 'shell 变量', link: '/linux/shell/variable.html' },
                        { text: 'shell 传递参数', link: '/linux/shell/passing-arguments.html' },
                        { text: 'shell 数组', link: '/linux/shell/array.html' },
                        { text: 'shell 运算符', link: '/linux/shell/array.html' },
                        { text: 'shell echo 命令', link: '/linux/shell/echo.html' },
                        { text: 'shell printf 命令', link: '/linux/shell/printf.html' },
                        { text: 'shell test 命令', link: '/linux/shell/test.html' },
                        { text: 'shell 流程控制', link: '/linux/shell/process-control.html' },
                        { text: 'shell 函数', link: '/linux/shell/function.html' },
                        { text: 'shell 输入/输出重写向', link: '/linux/shell/io-redirections.html' },
                        { text: 'shell 文件包含', link: '/linux/shell/file-include.html' },
                        { text: 'shell 踪与调试', link: '/linux/shell/debug.html' },
                    ]
                },
                {
                    text: '常用命令',
                    collapsed: false,
                    items: [
                        { text: 'cd(切换目录)', link: '/linux/command/cd.html' },
                        { text: 'pwd(显示当前目录)', link: '/linux/command/pwd.html' },
                        { text: 'du(查看目录大小)', link: '/linux/command/du.html' },
                        { text: 'df(查看磁盘大小)', link: '/linux/command/df.html' },
                        { text: 'ls / ll(查看目录)', link: '/linux/command/ls-ll.html' },
                        { text: 'mkdir(创建目录)', link: '/linux/command/mkdir.html' },
                        { text: 'cp(复制文件)', link: '/linux/command/cp.html' },
                        { text: 'mv(移动/重全名)', link: '/linux/command/mv.html' },
                        { text: 'rm(删除文件/目录)', link: '/linux/command/rm.html' },
                        { text: 'stat(查看文件属性)', link: '/linux/command/stat.html' },
                        { text: 'echo(输出信息)', link: '/linux/command/echo.html' },
                        { text: 'cat(查看文件)', link: '/linux/command/cat.html' },
                        { text: 'chown(改变文件所属用户)', link: '/linux/command/chown.html' },
                        { text: 'chgrp(改变用户所属组)', link: '/linux/command/chgrp.html' },
                        { text: 'wget(下载文件)', link: '/linux/command/wget.html' },
                        { text: 'grep(文件内容查找)', link: '/linux/command/grep.html' },
                        { text: 'more/less(内容部分显示)', link: '/linux/command/more-less.html' },
                        { text: 'wc(统计文本行数/字数)', link: '/linux/command/wc.html' },
                        { text: 'find(查找文件)', link: '/linux/command/find.html' },
                        { text: 'touch(创建空文件)', link: '/linux/command/touch.html' },
                        { text: 'ln(创建软链接)', link: '/linux/command/ln.html' },
                        { text: 'head(显示文件头内容)', link: '/linux/command/head.html' },
                        { text: 'tail(显示文件尾内容)', link: '/linux/command/tail.html' },
                        { text: '压缩/解压等命令', link: '/linux/command/compress.html' },
                        { text: 'clear(清屏)', link: '/linux/command/clear.html' },
                        { text: 'whoami(显示当前登录用户)', link: '/linux/command/whoami.html' },
                        { text: 'hostname(显示当前主机名)', link: '/linux/command/hostname.html' },
                        { text: 'uname(显示系统信息)', link: '/linux/command/uname.html' },
                        { text: 'top(系统资源监控)', link: '/linux/command/top.html' },
                        { text: 'ps(显示瞬间进程状态)', link: '/linux/command/ps.html' },
                        { text: 'ifconfig(查看网络情况)', link: '/linux/command/ifconfig.html' },
                        { text: 'ping(测试网络连通)', link: '/linux/command/ping.html' },
                        { text: 'netstat(显示网络状态信息)', link: '/linux/command/netstat.html' },
                        { text: 'logout(退出登录)', link: '/linux/command/logout.html' },
                        { text: 'shutdown / halt(关闭系统)', link: '/linux/command/shutdown.html' },
                        { text: 'reboot(重启系统)', link: '/linux/command/reboot.html' },
                        { text: 'useradd(创建用户)', link: '/linux/command/useradd.html' },
                        { text: 'userdel(删除用户)', link: '/linux/command/userdel.html' },
                        { text: 'groupadd(创建用户组)', link: '/linux/command/groupadd.html' },
                        { text: 'groupdel(删除用户组)', link: '/linux/command/groupdel.html' },
                        { text: 'passwd(设置密码)', link: '/linux/command/passwd.html' },
                        { text: 'su(变更使用者身份)', link: '/linux/command/su.html' },
                        { text: 'sudo(以管理员身份运行)', link: '/linux/command/sudo.html' },
                    ]
                }
            ],

            '/basic-theor/': [{
                    text: '系统篇',
                    collapsed: false,
                    items: [
                        { text: '计算机系统结构', link: '/basic-theor/system/computer.html' },
                        { text: '计算机组成原理', link: '/basic-theor/system/theory.html' },
                    ]
                },
                {
                    text: '排序算法篇',
                    collapsed: false,
                    items: [
                        { text: '冒泡排序', link: '/basic-theor/algorithm/bubble.html' },
                        { text: '选择排序', link: '/basic-theor/algorithm/selection.html' },
                        { text: '插入排序', link: '/basic-theor/algorithm/insertion.html' },
                        { text: '希尔排序', link: '/basic-theor/algorithm/shell.html' },
                        { text: '归并排序', link: '/basic-theor/algorithm/merge.html' },
                        { text: '快速排序', link: '/basic-theor/algorithm/quick.html' },
                        { text: '堆排序', link: '/basic-theor/algorithm/heap.html' },
                        { text: '计数排序', link: '/basic-theor/algorithm/counting.html' },
                        { text: '桶排序', link: '/basic-theor/algorithm/bucket.html' },
                        { text: '基数排序', link: '/basic-theor/algorithm/radix.html' },
                    ]
                },
                {
                    text: '设计模式篇',
                    collapsed: false,
                    items: [
                        { text: '工厂模式', link: '/basic-theor/design-mode/factory.html' },
                        { text: '抽象工厂模式', link: '/basic-theor/design-mode/factory-abstract.html' },
                        { text: '单例模式', link: '/basic-theor/design-mode/singleton.html' },
                        { text: '代理模式', link: '/basic-theor/design-mode/proxy.html' },
                        { text: '策略模式', link: '/basic-theor/design-mode/strategy.html' },
                        { text: '模板方法模式', link: '/basic-theor/design-mode/template.html' },
                        { text: '建造者模式', link: '/basic-theor/design-mode/builder.html' },
                        { text: '原型模式', link: '/basic-theor/design-mode/prototype.html' },
                        { text: '中介者模式', link: '/basic-theor/design-mode/mediator.html' },
                        { text: '适配器模式', link: '/basic-theor/design-mode/adapter.html' },
                        { text: '门面模式', link: '/basic-theor/design-mode/facade.html' },
                        { text: '装饰模式', link: '/basic-theor/design-mode/decorator.html' },
                        { text: '观察者模式', link: '/basic-theor/design-mode/observer.html' },
                        { text: '组合模式', link: '/basic-theor/design-mode/combined.html' },
                        { text: '状态模式', link: '/basic-theor/design-mode/status.html' },
                        { text: '命令模式', link: '/basic-theor/design-mode/command.html' },
                        { text: '迭代器模式', link: '/basic-theor/design-mode/iterator.html' },
                        { text: '备忘录模式', link: '/basic-theor/design-mode/memo.html' },
                        { text: '解释器模式', link: '/basic-theor/design-mode/interpreter.html' },
                        { text: '桥梁模式', link: '/basic-theor/design-mode/bridge.html' },
                        { text: '享元模式', link: '/basic-theor/design-mode/flyweight.html' },
                    ]
                },
                {
                    text: '网络篇',
                    collapsed: false,
                    items: [
                        { text: 'OSI 网络七层模型', link: '/basic-theor/network/osi.html' },
                        { text: 'TCP/IP 网络协议', link: '/basic-theor/network/tcp-ip.html' },
                    ]
                }
            ],
        }
    }
}