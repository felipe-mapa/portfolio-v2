import { Text } from "@chakra-ui/react";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";
import { ImageTag } from "~/components/CodeElements/ImageTag";

import Profile from "~/assets/images/profile.jpg";

const AboutFile = () => {
    return (
        <ReactFile name="About">
            <Tag>
                <ImageTag imageSource={Profile} />
                <Tag addSpacingToChildren name="p">
                    <Text
                        fontSize="2xl"
                        color="editor.foreground"
                        maxWidth="600px"
                        lineHeight={"8"}
                    >
                        Fbknf bkfsrnwbk bjfrsnb bjrfsn jrgvnr Bnvjrfn brfswnb.
                        Vgjrwd vb v vgjdrnv Vnbjfrwsngvknfrkgv bnfriknbgvinrfs
                        mbvmjfrsn vhrdwuvb vdrwhnuv Bvwronnruvwns
                    </Text>
                    <Text
                        fontSize="2xl"
                        color="editor.foreground"
                        maxWidth="600px"
                        lineHeight={"8"}
                    >
                        Fbknf bkfsrnwbk bjfrsnb bjrfsn jrgvnr Bnvjrfn brfswnb.
                        Vgjrwd vb v vgjdrnv Vnbjfrwsngvknfrkgv bnfriknbgvinrfs
                        mbvmjfrsn vhrdwuvb vdrwhnuv Bvwronnruvwns
                    </Text>
                    <Text
                        fontSize="2xl"
                        color="editor.foreground"
                        maxWidth="600px"
                        lineHeight={"8"}
                    >
                        Fbknf bkfsrnwbk bjfrsnb bjrfsn jrgvnr Bnvjrfn brfswnb.
                        Vgjrwd vb v vgjdrnv Vnbjfrwsngvknfrkgv bnfriknbgvinrfs
                        mbvmjfrsn vhrdwuvb vdrwhnuv Bvwronnruvwns
                    </Text>
                    <Text
                        fontSize="2xl"
                        color="editor.foreground"
                        maxWidth="600px"
                        lineHeight={"8"}
                    >
                        Fbknf bkfsrnwbk bjfrsnb bjrfsn jrgvnr Bnvjrfn brfswnb.
                        Vgjrwd vb v vgjdrnv Vnbjfrwsngvknfrkgv bnfriknbgvinrfs
                        mbvmjfrsn vhrdwuvb vdrwhnuv Bvwronnruvwns
                    </Text>
                    <Text
                        fontSize="2xl"
                        color="editor.foreground"
                        maxWidth="600px"
                        lineHeight={"8"}
                    >
                        Fbknf bkfsrnwbk bjfrsnb bjrfsn jrgvnr Bnvjrfn brfswnb.
                        Vgjrwd vb v vgjdrnv Vnbjfrwsngvknfrkgv bnfriknbgvinrfs
                        mbvmjfrsn vhrdwuvb vdrwhnuv Bvwronnruvwns
                    </Text>
                </Tag>
            </Tag>
        </ReactFile>
    );
};

export { AboutFile };
