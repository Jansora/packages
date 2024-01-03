import React from "react";
import Link from "next/link";
import {Orbit} from "lucide-react";
import {IconFont} from "@/components/custom/iconfont/IconFont";


const navigation = {
    solutions: [
        { name: '博客', href: '/notebook' },
        { name: '专栏', href: 'https://old.jansora.com/knowledge' },
        { name: '代码在线', href: 'https://old.jansora.com/play/java' },
        { name: '房价分析', href: 'https://old.jansora.com/beike' },
    ],
    support: [
        { name: '代码人生', href: 'https://coding.docs.jansora.app/' },
        { name: '深入浅出ElasticSearch', href: 'https://elasticsearch.docs.jansora.app/' },
        { name: '一站式云原生', href: 'https://cloud.docs.jansora.app/' },
        { name: '深入浅出消息队列', href: 'https://rocketmq.docs.jansora.app/' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
    ],
    legal: [
        { name: '关于本站', href: '#' },
        { name: '关于作者', href: '#' },
        { name: '隐私政策', href: '#' },
        { name: '服务条款', href: '#' },
    ],
    social: [

        {
            name: 'Weixin',
            href: 'https://cdn.jansora.com/homepage/wechat.jpg',
            icon: (props) => (
                <IconFont name="weixin" className="h-6 w-6" />
            ),
        },
        {
            name: 'Facebook',
            href: 'https://facebook.com',
            icon: (props) => (
                <IconFont name="facebook" className="h-6 w-6" />
            ),
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: (props) => (
                <IconFont name="twitter" className="h-6 w-6" />
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/Jansora',
            icon: (props) => (
                <IconFont name="github" className="h-6 w-6" />
            ),
        },
        {
            name: 'YouTube',
            href: 'https://youtube.com',
            icon: (props) => (
                <IconFont name="youtube" className="h-6 w-6" />
            ),
        },
    ],
}

export default function Footer() {

    return (
        <footer className="flex-1 lg:px-5 bg-background absolute w-full" aria-labelledby="footer-heading">

            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="mx-auto pb-6">
                <div className="border-t border-gray/10 pt-8 ">
                    {/*<p className="text-xs leading-5 text-gray-400">&copy; 2020 Your Company, Inc. All rights reserved.</p>*/}
                </div>
                <div className="xl:grid xl:grid-cols-3 xl:gap-8 px-8 lg:px-0">
                    <div className="space-y-8">
                        {/*<img*/}
                        {/*    className="h-7"*/}
                        {/*    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"*/}
                        {/*    alt="Company name"*/}
                        {/*/>*/}
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                            <Orbit className="mr-2 h-6 w-6  animate-spin-slow"/>
                            {/*<Command className="mr-2 h-8 w-8" />*/}
                            <span className="inline-block my-auto select-none ">
                                 Jansora
                                </span>
                        </Link>
                        <p className="text-sm leading-6">
                            心之所向，素履以往；生如逆旅，一苇以航
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 mr-3">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div className=" flex flex-col items-end">
                                <h3 className="text-sm font-semibold leading-6 ">轻应用</h3>
                                <ul role="list" className="mt-6 space-y-4 flex flex-col items-end">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-muted-foreground ">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0 flex flex-col items-end">
                                <h3 className="text-sm font-semibold leading-6 ">知识专栏</h3>
                                <ul role="list" className="mt-6 space-y-4 flex flex-col items-end">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-muted-foreground ">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div className=" flex flex-col items-end">
                                <h3 className="text-sm font-semibold leading-6">友情链接</h3>
                                <ul role="list" className="mt-6 space-y-4 flex flex-col items-end">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-muted-foreground ">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0 flex flex-col items-end">
                                <h3 className="text-sm font-semibold leading-6 ">关于</h3>
                                <ul role="list" className="mt-6 space-y-4 flex flex-col items-end">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-muted-foreground ">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mt-10 border-t border-gray/10 pt-5 ">
                    <p className="text-xs leading-5 text-gray-400  px-8 lg:px-0" >&copy; 2013-2029
                        {/*All rights reserved.*/}
                        {/*Built at {buildAt}*/}

                        <a className="hidden sm:inline-block float-right" href="https://beian.miit.gov.cn/" target="_blank" rel='noopener noreferrer'>
                          <span className="relative px-3 py-1 text-xs ">
                            豫ICP备19010665号
                          </span>
                        </a>
                    </p>

                </div>
            </div>
        </footer>
    )
}

