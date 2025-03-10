export function useDefaultSeoMeta({
  title = "新歓特設サイト",
  description = "ドローン、ラジコン飛行機、電子工作、プログラミングなどの分野で幅広く活動する茨城大学公認サークル茨城大学航空技術研究会の新歓特設サイトです。",
}): Parameters<typeof useSeoMeta>[0] {
  return {
    title: title,
    description: description,
    keywords:
      "茨城大学,日立キャンパス,水戸キャンパス,工学部,サークル,学生団体,航空技術研究会,新歓,新歓祭ドローン,ラジコン,ロボット,ロボコン,電子工作,プログラミング,教育,社会貢献",
    ogTitle: title,
    ogSiteName: "茨城大学航空技術研究会新歓特設サイト",
    ogDescription: description,
    ogType: "website",
    ogImage: "https://ibarakikougiken.github.io/recruitment/ogp.png",
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: "https://ibarakikougiken.github.io/recruitment/ogp.png",
    twitterSite: "@ibarakikougiken",
    twitterCreator: "@ibarakikougiken",
  };
}
